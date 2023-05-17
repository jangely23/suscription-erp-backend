import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateChargeAccountTypeDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly amount: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly frequency: string;
}

export class UpdateChargeAccountTypeDto extends PartialType(CreateChargeAccountTypeDto){}