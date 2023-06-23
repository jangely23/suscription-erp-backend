import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ProductTypeService } from '../services/product_type.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateProductTypeDto, UpdateProductTypeDto } from '../dtos/product_type.dto';
import { ApikeyGuard } from 'src/auth/guards/apikey.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/auth/decorators/role.decorator';
import { Role } from 'src/auth/models/role.model';

@ApiBearerAuth()
@ApiTags('Product type')
@Controller('product-type')
@UseGuards(ApikeyGuard, JwtAuthGuard, RoleGuard)
export class ProductTypeController {
    constructor(private productType:ProductTypeService){}

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Get()
    @HttpCode(HttpStatus.ACCEPTED)
    getAll(){
        return this.productType.findAll();
    }

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Get(':productTypeId')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(@Param('productTypeId', ParseIntPipe) productTypeId: number){
        return this.productType.findOne(productTypeId);
    }

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() payload: CreateProductTypeDto){
        return this.productType.create(payload);
    }

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Put(':productTypeId')
    @HttpCode(HttpStatus.OK)
    update(
        @Param('productTypeId', ParseIntPipe) productTypeId: number,
        @Body() payload: UpdateProductTypeDto
    ){
        return this.productType.update(productTypeId, payload);
    }

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Delete(':productTypeId')
    @HttpCode(HttpStatus.OK)
    delete( @Param('productTypeId', ParseIntPipe) productTypeId: number ){
        return this.productType.delete(productTypeId);
    }
}
