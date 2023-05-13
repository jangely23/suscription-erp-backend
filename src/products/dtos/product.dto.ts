import { ApiProperty, PartialType } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"


export class CreateProductDto{       

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly product_type_id: number;      
    
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
    @ApiProperty()
    readonly state: string;               
    
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly quantity: number; 
    
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly price: number;  
    
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly sale: number;                
    
    @IsNumber()
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