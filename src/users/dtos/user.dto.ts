import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, Min } from "class-validator";

export class CreateUserDto{
    @IsPositive()
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly customer_id: number;      
    

    @ApiProperty()
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty()
    @IsNotEmpty()
    readonly username: string;

    @ApiProperty()
    @IsNotEmpty()
    readonly email: string;

    @ApiProperty()
    @IsNotEmpty()
    readonly password: string;

    @ApiProperty({ example:['active','inactive','eliminate']})
    @IsNotEmpty()
    readonly status:  string;

    @ApiProperty({example:['superadmin','administrator','operator','support']})
    @IsNotEmpty()
    readonly role:  string;
}

export class UpdateUserDto extends PartialType ( CreateUserDto ) {}

export class FilterUserDto {
    @IsOptional()
    @IsNumber()
    @IsPositive()
    limit: number;

    @IsNumber()
    @Min(0)
    @IsOptional()
    offset: number;
}