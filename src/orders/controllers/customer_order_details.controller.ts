import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CustomerOrderDetailsService } from '../services/customer_order_details.service';

@ApiTags('Customer order details')
@Controller('customer-order-details')
export class CustomerOrderDetailsController {
    constructor(private customerOrderDetail: CustomerOrderDetailsService){}

    @Get(':customerOrderId')
    @HttpCode(HttpStatus.OK)
    getAllCustomerOrderDetailsByOrder(
        @Param('customerOrderId') customer_order_id: number
    ){
        return this.customerOrderDetail.findAll(customer_order_id)
    }
}
