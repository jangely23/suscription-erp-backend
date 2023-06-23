import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CustomerOrderDetailsService } from '../services/customer_order_details.service';
import { CreateCustomerOrderDetailDto, FilterCustomerOrderDetailDto, UpdateCustomerOrderDetailDto } from '../dtos/customer_order_detail.dto';
import { ApikeyGuard } from 'src/auth/guards/apikey.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { Role } from 'src/auth/models/role.model';
import { Roles } from 'src/auth/decorators/role.decorator';

@ApiBearerAuth()
@ApiTags('Customer order details')
@UseGuards(ApikeyGuard, JwtAuthGuard, RoleGuard)
@Controller('customer-order-details')
export class CustomerOrderDetailsController {
    constructor(private customerOrderDetail: CustomerOrderDetailsService){}

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Get(':customerOrderId')
    @HttpCode(HttpStatus.ACCEPTED)
    getAllByOrder(
        @Param('customerOrderId', ParseIntPipe) customer_order_id: number,
        @Query() params: FilterCustomerOrderDetailDto
    ){
        return this.customerOrderDetail.findAll(customer_order_id, params)
    }

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Get('order-detail/:customerOrderDetailId')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(
        @Param('customerOrderDetailId', ParseIntPipe) customer_order_detail_id: number
    ){
        return this.customerOrderDetail.findOne(customer_order_detail_id)
    }

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(
        @Body() payload: CreateCustomerOrderDetailDto
    ){
        return this.customerOrderDetail.create(payload)
    }

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Put(':customerOrderDetailId')
    @HttpCode(HttpStatus.OK)
    update(
        @Body() payload: UpdateCustomerOrderDetailDto,
        @Param('customerOrderDetailId', ParseIntPipe) customer_order_detail_id: number
    ){
        return this.customerOrderDetail.update(customer_order_detail_id, payload);
    }

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Delete(':customerOrderDetailId')
    @HttpCode(HttpStatus.OK)
    delete(
        @Param('customerOrderDetailId', ParseIntPipe) customer_order_detail_id: number
    ){
        return this.customerOrderDetail.delete(customer_order_detail_id);
    }
}
