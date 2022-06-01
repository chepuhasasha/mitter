import { Module } from '@nestjs/common';
import { ChanelsModule } from './chanels/chanels.module';
@Module({
  imports: [ChanelsModule],
  providers: [],
})
export class AppModule {}
