import {
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { IMessage, ICodeMessage, IUtilizationMessage } from '@mitter/types';

@WebSocketGateway()
export class MessangerGateway {
  @SubscribeMessage('message')
  onMessage(
    socket: Socket,
    data: IMessage | ICodeMessage | IUtilizationMessage,
  ): WsResponse<IMessage | ICodeMessage | IUtilizationMessage> {
    return { event: `event_${data.type}`, data };
  }
}
