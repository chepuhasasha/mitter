import {
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { ClientMessage, ServerMessage } from '@mitter/types';
import { UseGuards } from '@nestjs/common';
import { RoomGuard } from './room.guard';

@WebSocketGateway()
export class RoomGateway {
  handleConnection(socket: Socket): WsResponse<string> {
    const room = socket.handshake.auth.token.split(':')[0];
    if (room) {
      socket.join(room);
      socket.emit('room_connected', room);
      return { event: 'room_connected', data: room };
    }
    return { event: 'error', data: 'Invalid token' };
  }

  @UseGuards(RoomGuard)
  @SubscribeMessage('message')
  onMessage(socket: Socket, data: ClientMessage): WsResponse<ServerMessage> {
    const result = {
      ...data,
      id: '123',
      time: Date.now(),
    };
    socket.rooms.forEach((room) => {
      socket.to(room).emit(`event_${data.type}`, result);
    });
    return { event: `event_${data.type}`, data: result };
  }
}
