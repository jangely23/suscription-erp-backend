import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CustomersService } from '../services/customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';

@ApiTags('Customer')
@Controller('customers')
export class CustomersController {
  constructor(private customer: CustomersService) {}

  @Get(':companyId')
  @ApiOperation({ summary: 'Customer list of the company' })
  @HttpCode(HttpStatus.ACCEPTED)
  getAllCustomers(
    @Param('companyId') company_id: number,
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
  ) {
    return this.customer.findAll(company_id);
  }

  @Get(':parentId/:customerId')
  @ApiOperation({ summary: 'consult a specific customer of the company' })
  @HttpCode(HttpStatus.ACCEPTED)
  getOneCustomer(
    @Param('parentId') parent_id: number,
    @Param('customerId') customer_id: number,
  ) {
    return this.customer.findOne(parent_id, customer_id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateCustomerDto){
    return this.customer.create(payload)
  }

  @Put(':customerId')
  @HttpCode(HttpStatus.OK)
  update(
    @Param('customerId', ParseIntPipe) customer_id: number,
    @Body() payload: UpdateCustomerDto
  ){
    return this.customer.update(customer_id, payload);
  }

  @Delete(':customerId')
  delete( @Param('customerId', ParseIntPipe) customer_id: number){
    return this.customer.delete(customer_id);
  }
}
