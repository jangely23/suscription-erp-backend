import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CustomerTypeService } from '../services/customer_type.service';

@ApiTags('Customer type')
@Controller('customers-type')
export class CustomerTypeController {
    constructor(private customerType: CustomerTypeService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    getAllCustomersType(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
    ){
        return this.customerType.findAll();
    }

    @Get(':customerTypeId')
    @HttpCode(HttpStatus.OK)
    getOneCustomerType(@Param('customerTypeId', ParseIntPipe)customer_type_id: number ){
        return this.customerType.findOne(customer_type_id);
    }

    
}
