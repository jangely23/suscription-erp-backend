import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ProductTypeService } from '../services/product_type.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Product type')
@Controller('product-type')
export class ProductTypeController {
    constructor(private productType:ProductTypeService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    getAllProductType(){
        return this.productType.findAll();
    }

    @Get(':productTypeId')
    @HttpCode(HttpStatus.OK)
    getOneProductType(@Param('productTypeId') productTypeId: number){
        return this.productType.findOne(productTypeId);
    }
}
