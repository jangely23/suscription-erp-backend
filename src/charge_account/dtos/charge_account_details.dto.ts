import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateChargeAccountDetailsDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    readonly charge_account_id: number;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    readonly product_id: number;
  
    @ApiProperty()
    @IsString()
    readonly observation: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    readonly quantity: number;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    readonly value: number;
}

export class UpdateChargeAccountDetailDto extends PartialType(CreateChargeAccountDetailsDto){}