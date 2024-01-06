import { Controller, Get, Param } from '@nestjs/common';
import { PhonesService } from './phones.Service';

@Controller('/phones')
export class PhonesController {
    constructor(private readonly phonesService: PhonesService) {}

    @Get()
    getList(): object[] {
        return this.phonesService.getList();
    }

    @Get(":version")
    getVersionList(@Param('version') version:number): object[] {
        return this.phonesService.getVersionList(version);
    }
}
