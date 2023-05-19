import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CustomerOrdersService } from '../services/customers_orders.service';
import { CreateCustomerOrderDto, UpdateCustomerOrderDto } from '../dtos/customer_order.dto';

@ApiTags('Customer orders')
@Controller('customer-orders')
export class CustomerOrdersController {
    /* constructor(private customerOrder: CustomerOrdersService ){}
   
    @Get('order/:customerOrderId')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(
        @Param('customerOrderId', ParseIntPipe) customer_order_id: number,
    ){
        return this.customerOrder.findOne(customer_order_id);
    }

    @Get(':companyId')
    @HttpCode(HttpStatus.ACCEPTED)
    getAllByCompany(
        @Param('companyId', ParseIntPipe) company_id: number
    ){
        return this.customerOrder.findAllByCompany(company_id);
    }

    @Get(':companyId/:customerId')
    @HttpCode(HttpStatus.ACCEPTED)
    getAllByCustomer(
        @Param('companyId', ParseIntPipe) company_id: number,
        @Param('customerId', ParseIntPipe) customer_id: number,
    ){
        return this.customerOrder.findAllByCustomer(company_id, customer_id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() payload: CreateCustomerOrderDto){
        return this.customerOrder.create(payload);
    }

    @Put(':customerOrderId')
    @HttpCode(HttpStatus.OK)
    update(
        @Param('customerOrderId', ParseIntPipe) customer_order_id: number,
        @Body() payload: UpdateCustomerOrderDto
    ){
        return this.customerOrder.update(customer_order_id, payload);
    }

    @Delete(':customerOrderId')
    @HttpCode(HttpStatus.OK)
    delete(@Param('customerOrderId', ParseIntPipe) customer_order_id: number){
        return this.customerOrder.delete(customer_order_id);
    } */   
}