import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { RoomModule } from './room/room.module';
import { MessangerGateway } from './messanger.gateway';
@Module({
  imports: [UserModule, RoomModule],
  providers: [MessangerGateway],
})
export class AppModule {}
