import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CustomerTypeService } from '../services/customer_type.service';

@ApiTags('Customer type')
@Controller('customer-type')
export class CustomerTypeController {
    constructor(private customerType: CustomerTypeService) {}

    @Get()
    @HttpCode(HttpStatus.ACCEPTED)
    getCustomerType(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
    ){
        return this.customerType.findAll();
    }

    @Get('prueba')
    prueba(){
        return 'estoy funcionando'
    }

    
}
