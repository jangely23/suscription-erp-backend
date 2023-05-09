import { ApiProperty, PartialType } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"


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
    @ApiProperty()
    readonly reference: string;           
    
    @IsString()
    @ApiProperty()
    readonly stocktacking_sku: string;    
    
    @IsNumber()
    @ApiProperty()
    readonly size: number;                
    
    @IsString()
    @ApiProperty()
    readonly unit_of_measurement: string; 
    
    @IsString()
    @ApiProperty()
    readonly description: string;         
    
    @IsString()
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
    @ApiProperty()
    readonly image: string; 
    
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly cost_price: number;          

}

export class UpdateProductDto extends PartialType(CreateProductDto){}