import {
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { IMessage } from '@mitter/types';

@WebSocketGateway()
export class MessangerGateway {
  @SubscribeMessage('message')
  onMessage(socket: Socket, data: IMessage): WsResponse<unknown> {
    return { event: `event_${data.type}`, data };
  }
}
