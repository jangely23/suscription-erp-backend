import { ApiProperty, PartialType } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Min } from "class-validator"


export class CreateProductDto{       

    @IsPositive()
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly product_type_id: number;      
    
    @IsPositive()
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly company_id: number;           
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly name: string;                                                          
    
    @IsString()
    @IsOptional()
    @ApiProperty()
    readonly reference: string;           
    
    @IsString()
    @IsOptional()
    @ApiProperty()
    readonly stocktacking_sku: string;    
    
    @IsNumber()
    @IsOptional()
    @ApiProperty()
    readonly size: number;                
    
    @IsString()
    @IsOptional()
    @ApiProperty()
    readonly unit_of_measurement: string; 
    
    @IsString()
    @IsOptional()
    @ApiProperty()
    readonly description: string;         
    
    @IsString()
    @IsOptional()
    @ApiProperty()
    readonly lote: string;                
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({example:['inactive','available','sold_out','eliminate']})
    readonly status: string;               
    
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly quantity: number; 
    
    @IsPositive()
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly price: number;  
    
    @Min(0)
    @IsNumber()
    @IsOptional()
    @IsNotEmpty()
    @ApiProperty()
    readonly sale: number;                
    
    @Min(0)
    @IsNumber()
    @IsOptional()
    @IsNotEmpty()
    @ApiProperty()
    readonly iva: number;  
    
    @IsString()
    @IsOptional()
    @ApiProperty()
    readonly image: string; 
    
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly cost_price: number;  
            

}

export class UpdateProductDto extends PartialType(CreateProductDto){}

export class FilterProductsDto{
    @IsOptional()
    @IsNumber()
    @IsPositive()
    limit: number;

    @IsOptional()
    @Min(0)
    @IsNumber()
    offset: number;
}