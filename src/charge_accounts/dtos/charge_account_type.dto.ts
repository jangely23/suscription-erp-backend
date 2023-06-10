import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";


export class CreateChargeAccountTypeDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    @IsPositive()
    readonly amount: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly frequency: string;
}

export class UpdateChargeAccountTypeDto extends PartialType(CreateChargeAccountTypeDto){}