import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Min } from "class-validator";

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
    @ApiProperty({example: ['pending','payment','suspended','eliminate','none']})
    readonly status: string;
  
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly full_value: number;
}

export class UpdateChargeAccountDto extends PartialType(CreateChargeAccountDto){}

export class FilterChargeAccountDto {
    @IsOptional()
    @IsNumber()
    @IsPositive()
    limit: number;
  
    @IsOptional()
    @IsNumber()
    @Min(0)
    offset: number;
}