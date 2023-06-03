import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProductDto, FilterProductsDto, UpdateProductDto } from '../dtos/product.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
    constructor(private products: ProductsService){}

    @Get(':companyId/products')
    @ApiOperation({ summary: 'List of products' })
    @HttpCode(HttpStatus.ACCEPTED)
    getAllProducts(
        @Param('companyId', ParseIntPipe) company_id: number,
        @Query() params: FilterProductsDto,
    ){
        return this.products.findAllProducts(company_id, params);
    }

    @Get(':companyId/services')
    @ApiOperation({ summary: 'List of services' })
    @HttpCode(HttpStatus.ACCEPTED)
    getAllServices(
        @Param('companyId', ParseIntPipe) company_id: number,
        @Query() params: FilterProductsDto,
    ){
        return this.products.findAllServices(company_id, params);
    }

    @Get(':productId')
    @ApiOperation({ summary: 'List one service or product ' })
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(
        @Param('productId', ParseIntPipe) product_id: number
    ){
        return this.products.findOne(product_id);
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
    }

}
