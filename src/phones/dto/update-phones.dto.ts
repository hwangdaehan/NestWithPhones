
import { PartialType } from "@nestjs/mapped-types";
import { CreatePhonesDto } from "./create-phones.dto";

// PartialType 으로 
export class UpdatePhonesDto extends PartialType(CreatePhonesDto){}