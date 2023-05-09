import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCustomerDto{
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly customer_type_id: number;

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
    readonly state: string;

    @IsString()
    @ApiProperty()
    readonly update_date: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto){}
