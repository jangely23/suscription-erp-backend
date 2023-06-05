import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Min } from "class-validator";


export class CreateChargeAccountDetailsDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    readonly chargeAccountChargeAccountId: number;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    readonly productProductId: number;
  
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

export class FilterChargeAccountDetailDto {
    @IsOptional()
    @IsNumber()
    @IsPositive()
    limit: number;
  
    @IsOptional()
    @IsNumber()
    @Min(0)
    offset: number;
}