import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateChargeAccountDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly customer_id: number;
  
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly company_id: number;
  
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly charge_account_type_id: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly state: string;
  
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly full_value: number;
}

export class UpdateChargeAccountDto extends PartialType(CreateChargeAccountDto){}