import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { RoomModule } from './room/room.module';
@Module({
  imports: [UserModule, RoomModule],
  providers: [],
})
export class AppModule {}
