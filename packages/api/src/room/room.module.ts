import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { RoomGuard } from './room.guard';
import { RoomGateway } from './room.gateway';

@Module({
  providers: [RoomService, RoomGuard, RoomGateway],
  controllers: [RoomController],
})
export class RoomModule {}
