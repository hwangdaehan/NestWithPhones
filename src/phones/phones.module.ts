import { Module } from '@nestjs/common';
import { PhonesController } from './phones.controller';
import { PhonesService } from './phones.Service';

@Module({
  imports:[],
  controllers: [PhonesController],
  providers: [PhonesService],
  exports:[PhonesService],
})
export class PhonesModule {}
