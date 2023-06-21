import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ProductTypeService } from '../services/product_type.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateProductTypeDto, UpdateProductTypeDto } from '../dtos/product_type.dto';
import { ApikeyGuard } from 'src/auth/guards/apikey.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';

@ApiBearerAuth()
@ApiTags('Product type')
@Controller('product-type')
@UseGuards(ApikeyGuard, JwtAuthGuard, RoleGuard)
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
