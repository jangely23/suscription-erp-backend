import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Min } from "class-validator";

export class CreateCustomerDto{
    @IsPositive()
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly customer_type_id: number;

    @IsPositive()
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly parent_id: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly cc_nit: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly address: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly city: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly country: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly status: string;

    @IsString()
    @ApiProperty()
    readonly update_date: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto){}

export class FilterCustomerDto {
    @IsOptional()
    @IsNumber()
    @IsPositive()
    limit: number;

    @IsNumber()
    @Min(0)
    @IsOptional()
    offset: number;
}
