import { IsNumber, IsString, IsOptional } from "class-validator";



export class CreatePhonesDto {
    
    
    @IsOptional()
    @IsNumber()
    readonly version:number;

    @IsNumber()
    readonly id:number;

    @IsString()
    readonly name:string;

}