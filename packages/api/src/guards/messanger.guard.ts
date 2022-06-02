import { CanActivate, Injectable } from '@nestjs/common';
import { RoomService } from '../room/room.service';

@Injectable()
export class MessangerGuard implements CanActivate {
  constructor(private roomService: RoomService) {}

  async canActivate(context: any): Promise<any> {
    const bearerToken = context.args[0].handshake.auth.token;
    const sucsess = await this.roomService.validateToken(bearerToken);
    if (sucsess) return 'Sucsess!';
    context.args[0].emit('error', 'Unauthorized!');
  }
}
