import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, Min } from "class-validator";

export class CreateStockInventoryDto{

    @IsNotEmpty()
    @ApiProperty()    
    readonly action: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly quantity: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly product_id: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly complany_id: number;
}

export class UpdateStockInventoryDto extends PartialType( CreateStockInventoryDto ) {}

export class FilterStockInventoryDto {
    @IsOptional()
    @IsNumber()
    @IsPositive()
    limit: number;

    @IsNumber()
    @Min(0)
    @IsOptional()
    offset: number;
}