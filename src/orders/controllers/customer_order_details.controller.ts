import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CustomerOrderDetailsService } from '../services/customer_order_details.service';
import { CreateCustomerOrderDetailDto, FilterCustomerOrderDetailDto, UpdateCustomerOrderDetailDto } from '../dtos/customer_order_detail.dto';

@ApiTags('Customer order details')
@Controller('customer-order-details')
export class CustomerOrderDetailsController {
    constructor(private customerOrderDetail: CustomerOrderDetailsService){}

    @Get(':customerOrderId')
    @HttpCode(HttpStatus.ACCEPTED)
    getAllByOrder(
        @Param('customerOrderId', ParseIntPipe) customer_order_id: number,
        @Query() params: FilterCustomerOrderDetailDto
    ){
        return this.customerOrderDetail.findAll(customer_order_id, params)
    }

    @Get('order-detail/:customerOrderDetailId')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(
        @Param('customerOrderDetailId', ParseIntPipe) customer_order_detail_id: number
    ){
        return this.customerOrderDetail.findOne(customer_order_detail_id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(
        @Body() payload: CreateCustomerOrderDetailDto
    ){
        return this.customerOrderDetail.create(payload)
    }

    @Put(':customerOrderDetailId')
    @HttpCode(HttpStatus.OK)
    update(
        @Body() payload: UpdateCustomerOrderDetailDto,
        @Param('customerOrderDetailId', ParseIntPipe) customer_order_detail_id: number
    ){
        return this.customerOrderDetail.update(customer_order_detail_id, payload);
    }

    @Delete(':customerOrderDetailId')
    @HttpCode(HttpStatus.OK)
    delete(
        @Param('customerOrderDetailId', ParseIntPipe) customer_order_detail_id: number
    ){
        return this.customerOrderDetail.delete(customer_order_detail_id);
    }
}
