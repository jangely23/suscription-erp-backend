import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export class CreateProductTypeDto{
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly product_type: string;
}

export class UpdateProductTypeDto extends PartialType(CreateProductTypeDto){}