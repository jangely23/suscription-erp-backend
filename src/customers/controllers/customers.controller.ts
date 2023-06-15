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
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CustomersService } from '../services/customers.service';
import { CreateCustomerDto, FilterCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
import { ApikeyGuard } from 'src/auth/guards/apikey.guard';


@ApiTags('Customer')
@Controller('customers')
@UseGuards(ApikeyGuard)
export class CustomersController {
  constructor(private customer: CustomersService) {}

  @Get('resellers')
  @ApiOperation({ summary: 'All customer type reseller' })
  @HttpCode(HttpStatus.ACCEPTED)
  getAll(
    @Query() params: FilterCustomerDto,
  ) {
    return this.customer.findAllReseller(params);
  }

  @Get('reseller/:companyId')
  @ApiOperation({ summary: 'Customer list of the company' })
  @HttpCode(HttpStatus.ACCEPTED)
  getAllCustomers(
    @Param('companyId') company_id: number,
    @Query() params: FilterCustomerDto,
  ) {
    return this.customer.findAllByCompany(company_id, params);
  }

  @Get('one/:customerId')
  @ApiOperation({ summary: 'consult a specific customer of the company' })
  @HttpCode(HttpStatus.ACCEPTED)
  getOneCustomer(
    @Param('customerId') customer_id: number,
  ) {
    return this.customer.findOne(customer_id);
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
