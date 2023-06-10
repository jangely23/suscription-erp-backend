import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CustomerTypeService } from '../services/customer_type.service';
import { CreateCustomerTypeDto, UpdateCustomerTypeDto } from '../dtos/customer_type.dto';

@ApiTags('Customer type')
@Controller('customers-type')
export class CustomerTypeController {
    constructor(private customerType: CustomerTypeService) {}

    @Get()
    @HttpCode(HttpStatus.ACCEPTED)
    getAllCustomersType(){
        return this.customerType.findAll();
    }

    @Get(':customerTypeId')
    @HttpCode(HttpStatus.ACCEPTED)
    getOneCustomerType(@Param('customerTypeId', ParseIntPipe)customer_type_id: number ){
        return this.customerType.findOne(customer_type_id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() payload: CreateCustomerTypeDto){
        return this.customerType.create(payload);
    }

    @Put(':customerTypeId')
    @HttpCode(HttpStatus.OK)
    update(
        @Param('customerTypeId', ParseIntPipe) customer_type_id: number, 
        @Body() payload: UpdateCustomerTypeDto
    ){
        return this.customerType.update(customer_type_id, payload);
    }

    @Delete(':customerTypeId')
    delete(@Param('customerTypeId', ParseIntPipe) customer_type_id: number){
        return this.customerType.delete(customer_type_id);
    }
    
}
