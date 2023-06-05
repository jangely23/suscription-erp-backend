import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Min } from "class-validator";


export class CreateChargeAccountTemplateDetailsDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    readonly chargeAccountTemplateChargeAccountTemplateId: number;
  
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

export class UpdateChargeAccountTemplateDetailDto extends PartialType(CreateChargeAccountTemplateDetailsDto){}

export class FilterChargeAccountTemplateDetailDto {
    @IsOptional()
    @IsNumber()
    @IsPositive()
    limit: number;
  
    @IsOptional()
    @IsNumber()
    @Min(0)
    offset: number;
}