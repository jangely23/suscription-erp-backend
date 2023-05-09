import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProductTypeService } from '../services/product_type.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateProductTypeDto, UpdateProductTypeDto } from '../dtos/product_type.dto';

@ApiTags('Product type')
@Controller('product-type')
export class ProductTypeController {
    constructor(private productType:ProductTypeService){}

    @Get()
    @HttpCode(HttpStatus.ACCEPTED)
    getAll(){
        return this.productType.findAll();
    }

    @Get(':productTypeId')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(@Param('productTypeId', ParseIntPipe) productTypeId: number){
        return this.productType.findOne(productTypeId);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() payload: CreateProductTypeDto){
        return this.productType.create(payload);
    }

    @Put(':productTypeId')
    @HttpCode(HttpStatus.OK)
    update(
        @Param('productTypeId', ParseIntPipe) productTypeId: number,
        @Body() payload: UpdateProductTypeDto
    ){
        return this.productType.update(productTypeId, payload);
    }

    @Delete(':productTypeId')
    @HttpCode(HttpStatus.OK)
    delete( @Param('productTypeId', ParseIntPipe) productTypeId: number ){
        return this.productType.delete(productTypeId);
    }
}
