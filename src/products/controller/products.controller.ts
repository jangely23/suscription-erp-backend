import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
    constructor(private products: ProductsService){}

    @Get(':companyId/products')
    @HttpCode(HttpStatus.OK)
    getAllProducts(@Param('companyId') company_id: number){
        return this.products.findAllProducts(company_id);
    }

    @Get(':companyId/services')
    @HttpCode(HttpStatus.OK)
    getAllServices(@Param('companyId') company_id: number){
        return this.products.findAllServices(company_id);
    }

    @Get(':companyId/:productId')
    @HttpCode(HttpStatus.OK)
    getOne(
        @Param('companyId') company_id: number,
        @Param('productId') product_id: number
    ){
        return this.products.findOne(company_id, product_id);
    }
}
