import { IRoom } from '@mitter/types/src';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RoomService {
  private rooms: IRoom[] = [
    {
      id: '1',
      name: 'Test 1',
      limit: 100,
      messages: [],
      owner_id: '1',
      keys: [
        {
          name: 'test key 1',
          hash: '123',
        },
      ],
    },
    {
      id: '2',
      name: 'Test 2',
      limit: 100,
      messages: [],
      owner_id: '1',
      keys: [
        {
          name: 'test key 2',
          hash: '234',
        },
      ],
    },
  ];
  async validateToken(token: string): Promise<boolean> {
    const id = token.split(':')[0];
    const key = token.split(':')[1];
    const room = await this.findRoomById(id);
    if (room) {
      return Boolean(room.keys.find((k) => k.hash === key));
    }
    return false;
  }

  async findRoomById(id: string): Promise<IRoom> {
    return this.rooms.find((room) => room.id === id);
  }
}
