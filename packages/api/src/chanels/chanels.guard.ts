import { CanActivate, Injectable } from '@nestjs/common';
import { ChanelsService } from './chanels.service';

@Injectable()
export class ChanelsGuard implements CanActivate {
  constructor(private chanelsService: ChanelsService) {}

  async canActivate(context: any): Promise<any> {
    return true;
  }
}
