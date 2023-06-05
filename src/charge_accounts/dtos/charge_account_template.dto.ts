import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Min } from "class-validator";


export class CreateChargeAccountTemplateDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly customerCustomerId: number;
  
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly companyCustomerId: number;
  
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly chargeAccountTypeChargeAccountTypeId: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly state: string;
  
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly full_value: number;
}

export class UpdateChargeAccountTemplateDto extends PartialType(CreateChargeAccountTemplateDto){}

export class FilterChargeAccountTemplateDto {
    @IsOptional()
    @IsNumber()
    @IsPositive()
    limit: number;
  
    @IsOptional()
    @IsNumber()
    @Min(0)
    offset: number;
}