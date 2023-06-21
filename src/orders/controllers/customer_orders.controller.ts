import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CustomerOrdersService } from '../services/customers_orders.service';
import { CreateCustomerOrderDto, FilterCustomerOrderDto, UpdateCustomerOrderDto } from '../dtos/customer_order.dto';
import { ApikeyGuard } from 'src/auth/guards/apikey.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';


@ApiBearerAuth()
@ApiTags('Customer orders')
@UseGuards(ApikeyGuard, JwtAuthGuard, RoleGuard)
@Controller('customer-orders')
export class CustomerOrdersController {
    constructor(private customerOrder: CustomerOrdersService ){}
   
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
        @Param('companyId', ParseIntPipe) company_id: number,
        @Query() params: FilterCustomerOrderDto
    ){
        return this.customerOrder.findAllByCompany(company_id, params);
    }

    @Get(':companyId/:customerId')
    @HttpCode(HttpStatus.ACCEPTED)
    getAllByCustomer(
        @Param('companyId', ParseIntPipe) company_id: number,
        @Param('customerId', ParseIntPipe) customer_id: number,
        @Query() params: FilterCustomerOrderDto
    ){
        return this.customerOrder.findAllByCustomer(company_id, customer_id, params);
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
    }   
}