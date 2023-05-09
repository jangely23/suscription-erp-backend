import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CustomerOrdersService } from '../services/customers_orders.service';

@ApiTags('Customer orders')
@Controller('customer-orders')
export class CustomerOrdersController {
    constructor(private customerOrder: CustomerOrdersService ){}
   
    @Get('order/:customerOrderId')
    @HttpCode(HttpStatus.OK)
    getOne(
        @Param('customerOrderId') customer_order_id: number,
    ){
        return this.customerOrder.findOne(customer_order_id);
    }

    @Get(':companyId')
    @HttpCode(HttpStatus.OK)
    getAllByCompany(
        @Param('companyId') company_id: number
    ){
        return this.customerOrder.findAllByCompany(company_id);
    }

    @Get(':companyId/:customerId')
    @HttpCode(HttpStatus.OK)
    getAllByCustomer(
        @Param('companyId') company_id: number,
        @Param('customerId') customer_id: number,
    ){
        return this.customerOrder.findAllByCustomer(company_id, customer_id);
    }

}