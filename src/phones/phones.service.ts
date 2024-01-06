import { Injectable } from '@nestjs/common';
import { CreatePhonesDto } from './dto/create-phones.dto';


let phoneList = [
    {version : 1,id:1,name:'IPhone 15 pro'},
    {version : 2,id:2,name:'IPhone 15'},
    {version : 3,id:3,name:'IPhone 14 pro'},
    {version : 2,id:4,name:'IPhone 14'},
    {version : 2,id:5,name:'Galaxy S23'},
    {version : 3,id:6,name:'Galaxy S22'}
]


@Injectable()
export class PhonesService {

    getList(): object[] {
        return phoneList;
    }

    getVersionList(ver:number): object[] {

        let resultData = phoneList.filter(phone => phone.version === ver)
        return resultData;
    }
}
