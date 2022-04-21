import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login';
import { SignUpDTO } from './dto/sign_up.dto';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // SIGN UP
  @UsePipes(new ValidationPipe())
  @Post('/signup')
  async signup(@Body() dto: SignUpDTO) {
    const oldUser = await this.authService.findByEmail(dto.email);
    if (oldUser) {
      throw new HttpException('Email already taken!', HttpStatus.FORBIDDEN);
    }
    return this.authService.signup(dto);
  }

  // LOGIN
  @UsePipes(new ValidationPipe())
  @Post('/login')
  async signin(
    @Body() dto: LoginDTO,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.login(dto, req, res);
  }

  // USER
  @Get('/refresh')
  async refresh(@Req() req: Request, @Res() res: Response) {
    const d = await this.authService.refresh(req, res);
    res.send(d);
  }
}
