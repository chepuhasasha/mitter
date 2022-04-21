import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { AuthModel, Device } from './auth.model';
import { SignUpDTO } from './dto/sign_up.dto';
import { Types } from 'mongoose';
import { genSalt, hash, compare } from 'bcryptjs';
import { LoginDTO } from './dto/login';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(AuthModel)
    private readonly authModel: ModelType<AuthModel>,
    private readonly jwtService: JwtService,
  ) {}

  async signup(dto: SignUpDTO): Promise<{
    _id: Types.ObjectId;
    email: string;
    name: string;
  }> {
    const salt = await genSalt(10);
    const newUser = new this.authModel({
      name: dto.name.toLowerCase(),
      email: dto.email.toLowerCase(),
      password: await hash(dto.password, salt),
    });
    newUser.save();
    return {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    };
  }

  async login(dto: LoginDTO, req: Request, res: Response) {
    const user = await this.findByEmail(dto.email);
    if (!user) {
      throw new UnauthorizedException('User not found!');
    }
    const isCorrectPassword = await compare(dto.password, user.password);
    if (!isCorrectPassword) {
      throw new UnauthorizedException('Incorrect password!');
    }

    const jwt = await this.jwtService.sign(
      { id: user._id },
      { expiresIn: '10m' },
    );
    const refresh = await this.jwtService.sign(
      { id: user._id },
      { expiresIn: '1d' },
    );

    const device = this.findDevice(req, user.devices);
    if (device && device.trusted) {
      user.devices = this.updateDevices(device, user.devices, refresh);
      user.save();
    } else if (!device) {
      user.devices.push({
        ip: req.ip,
        user_agent: req.headers['user-agent'],
        refresh,
        trusted: dto.trusted,
      });
      user.save();
    }
    res.cookie('jwt', refresh, { httpOnly: true });
    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      token: jwt,
    };
  }

  async refresh(req: Request, res: Response) {
    const cookie = req.cookies['jwt'];
    if (!cookie) {
      throw new UnauthorizedException();
    }
    const data = await this.jwtService.verifyAsync(cookie);
    if (!data) {
      throw new UnauthorizedException();
    } else {
      const user = await this.findById(data.id);
      const device = this.findDevice(req, user.devices);
      if (!device) {
        throw new UnauthorizedException();
      }
      if (!device.trusted) {
        throw new UnauthorizedException();
      }
      if (device.refresh != cookie) {
        throw new UnauthorizedException();
      }
      const refresh = await this.jwtService.sign(
        { id: user._id },
        { expiresIn: '1d' },
      );
      user.devices = this.updateDevices(device, user.devices, refresh);
      res.cookie('jwt', refresh, { httpOnly: true });
      user.save();
      return { msg: 'sucsess' };
    }
  }

  updateDevices(device: Device, devices: Device[], token: string) {
    return devices.map((d) => {
      if (d === device) {
        const updated = d;
        updated.refresh = token;
        return updated;
      }
      return d;
    });
  }

  findDevice(req: Request, devices: Device[]) {
    return devices.find(
      (device) =>
        device.ip === req.ip && device.user_agent === req.headers['user-agent'],
    );
  }

  async findByEmail(email: string): Promise<DocumentType<AuthModel>> {
    return this.authModel.findOne({ email: email.toLowerCase() }).exec();
  }
  async findById(id: string): Promise<DocumentType<AuthModel>> {
    return this.authModel.findById(id).exec();
  }
}
