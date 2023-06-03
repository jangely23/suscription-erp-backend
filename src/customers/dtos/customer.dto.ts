import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateCustomerDto{
    /* @IsPositive()
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly customerTypeCustomerTypeId: number;

    @IsPositive()
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly parentCustomerCustomerId: number; */

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
    readonly state: string;

    @IsString()
    @ApiProperty()
    readonly update_date: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto){}
