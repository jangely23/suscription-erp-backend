import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CustomersService } from '../services/customers.service';

@ApiTags('Customer')
@Controller('customers')
export class CustomersController {
  constructor(private customer: CustomersService) {}

  @Get(':companyId')
  @ApiOperation({ summary: 'Customer list of the company' })
  @HttpCode(HttpStatus.OK)
  getAllCustomers(
    @Param('companyId') company_id: number,
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
  ) {
    return this.customer.findAll(company_id);
  }

  @Get(':parentId/:customerId')
  @ApiOperation({ summary: 'consult a specific customer of the company' })
  @HttpCode(HttpStatus.OK)
  getOneCustomer(
    @Param('parentId') parent_id: number,
    @Param('customerId') customer_id: number,
  ) {
    return this.customer.findOne(parent_id, customer_id);
  }
}
