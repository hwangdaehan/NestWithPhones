import { Controller, Get, Param, Post,Put,Delete, Body } from '@nestjs/common';
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


    @Post()
    addPhone(@Body('version') version: number
             ,@Body('name') name: string): object {   

        return this.phonesService.addPhone(version,name);
    }

    @Put(":id")
    updatePhone(@Param('id') id:number
             ,@Body('version') version: number
             ,@Body('name') name: string): object {  

        return this.phonesService.updatePhone(id,version,name);
    
    }

    @Delete(":id")
    deletePhone(@Param('id') id:number):string {
        return this.phonesService.deletePhone(id);
    }
}
