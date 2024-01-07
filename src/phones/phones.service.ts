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

    addPhone(version:number,name:string): object {
        
        var obj = {
            id : phoneList.length+1,
            version : version,
            name : name 
        }

        phoneList.push(obj);

        return obj;
    }

    updatePhone(id:number,version:number,name:string): object {
        
        
        let resultData = phoneList.find(phone => phone.id === id)
        
            if(!resultData){
                let obj = {
                    code : 99,
                    msg : "no data",
                }
                return obj;
            }else{
                resultData.version = version;
                resultData.name = name;
                return resultData;
            }            
    }


    deletePhone(id:number):string{
        let resultData = phoneList.find(phone => phone.id === id)

        const idx = phoneList.indexOf(resultData);

        phoneList.splice(idx,1);

        return String(resultData.id + " 삭제 완료");
    }
}
