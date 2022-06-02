import {
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { IMessage, ICodeMessage, IUtilizationMessage } from '@mitter/types';
import { UseGuards } from '@nestjs/common';
import { MessangerGuard } from './guards/messanger.guard';

@WebSocketGateway()
export class MessangerGateway {
  handleConnection(socket: Socket): WsResponse<string> {
    const room = socket.handshake.auth.token.split(':')[0];
    if (room) {
      socket.join(room);
      return { event: 'room_connected', data: room };
    }
    return { event: 'error', data: 'Invalid token' };
  }

  @UseGuards(MessangerGuard)
  @SubscribeMessage('message')
  onMessage(
    socket: Socket,
    data: IMessage | ICodeMessage | IUtilizationMessage,
  ): WsResponse<IMessage | ICodeMessage | IUtilizationMessage> {
    socket.rooms.forEach((room) => {
      socket.to(room).emit(`event_${data.type}`, data);
    });
    return { event: `event_${data.type}`, data };
  }
}
