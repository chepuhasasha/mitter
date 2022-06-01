import { Module } from '@nestjs/common';
import { ChanelsGateway } from './chanels.gateway';
import { ChanelsGuard } from './chanels.guard';
import { ChanelsService } from './chanels.service';

@Module({
  providers: [ChanelsService, ChanelsGuard, ChanelsGateway],
})
export class ChanelsModule {}
