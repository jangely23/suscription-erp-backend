import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
    /* constructor(private products: ProductsService){}

    @Get(':companyId/products')
    @HttpCode(HttpStatus.ACCEPTED)
    getAllProducts(@Param('companyId', ParseIntPipe) company_id: number){
        return this.products.findAllProducts(company_id);
    }

    @Get(':companyId/services')
    @HttpCode(HttpStatus.ACCEPTED)
    getAllServices(@Param('companyId', ParseIntPipe) company_id: number){
        return this.products.findAllServices(company_id);
    }

    @Get(':companyId/:productId')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(
        @Param('companyId', ParseIntPipe) company_id: number,
        @Param('productId', ParseIntPipe) product_id: number
    ){
        return this.products.findOne(company_id, product_id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(
        @Body() payload: CreateProductDto,
    ){
        return this.products.create(payload);
    }


    @Put(':productId')
    @HttpCode(HttpStatus.OK)
    update(
        @Param('productId', ParseIntPipe) product_id: number,
        @Body() payload: UpdateProductDto
    ){
        return this.products.update(product_id, payload);
    }

    @Delete(':productId')
    @HttpCode(HttpStatus.OK)
    delete(
        @Param('productId', ParseIntPipe) product_id: number
    ){
        return this.products.delete(product_id);
    } */

}
