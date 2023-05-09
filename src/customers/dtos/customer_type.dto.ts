import { ApiProperty, PartialType} from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCustomerTypeDto{
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly customer_type: string;
}

export class UpdateCustomerTypeDto extends PartialType(CreateCustomerTypeDto){}