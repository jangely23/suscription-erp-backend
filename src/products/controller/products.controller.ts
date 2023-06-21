import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProductDto, FilterProductsDto, UpdateProductDto } from '../dtos/product.dto'; 
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from 'src/auth/decorators/role.decorator';
import { Role } from 'src/auth/models/role.model';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { ApikeyGuard } from 'src/auth/guards/apikey.guard';


@ApiBearerAuth()
@ApiTags('Products')
@UseGuards(ApikeyGuard, JwtAuthGuard, RoleGuard)
@Controller('products')
export class ProductsController {
    constructor(private products: ProductsService){}

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Get('one/:productId')
    @ApiOperation({ summary: 'List one service or product ' })
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(
        @Param('productId', ParseIntPipe) product_id: number
    ){
        return this.products.findOne(product_id);
    }

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Get(':companyId/products')
    @ApiOperation({ summary: 'List of products' })
    @HttpCode(HttpStatus.ACCEPTED)
    getAllProducts(
        @Param('companyId', ParseIntPipe) company_id: number,
        @Query() params: FilterProductsDto,
    ){
        return this.products.findAllProducts(company_id, params);
    }

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Get(':companyId/services')
    @ApiOperation({ summary: 'List of services' })
    @HttpCode(HttpStatus.ACCEPTED)
    getAllServices(
        @Param('companyId', ParseIntPipe) company_id: number,
        @Query() params: FilterProductsDto,
    ){
        return this.products.findAllServices(company_id, params);
    }

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(
        @Body() payload: CreateProductDto,
    ){
        return this.products.create(payload);
    }

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Put(':productId')
    @HttpCode(HttpStatus.OK)
    update(
        @Param('productId', ParseIntPipe) product_id: number,
        @Body() payload: UpdateProductDto
    ){
        return this.products.update(product_id, payload);
    }

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Delete(':productId')
    @HttpCode(HttpStatus.OK)
    delete(
        @Param('productId', ParseIntPipe) product_id: number
    ){
        return this.products.delete(product_id);
    }

}
