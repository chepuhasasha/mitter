import { Module } from '@nestjs/common';
import { ChanelsModule } from './chanels/chanels.module';
import { UserModule } from './user/user.module';
import { RoomModule } from './room/room.module';
import { MessangerGateway } from './messanger.gateway';
@Module({
  imports: [ChanelsModule, UserModule, RoomModule],
  providers: [MessangerGateway],
})
export class AppModule {}
