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
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CustomersService } from '../services/customers.service';
import { CreateCustomerDto, FilterCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
import { ApikeyGuard } from 'src/auth/guards/apikey.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/auth/decorators/role.decorator';
import { Role } from 'src/auth/models/role.model';

@ApiBearerAuth()
@ApiTags('Customer')
@Controller('customers')
@UseGuards(ApikeyGuard, JwtAuthGuard, RoleGuard)
export class CustomersController {
  constructor(private customer: CustomersService) {}

  @Roles(Role.ADMIN, Role.OPERATOR)
  @Get('resellers')
  @ApiOperation({ summary: 'All customer type reseller' })
  @HttpCode(HttpStatus.ACCEPTED)
  getAll(
    @Query() params: FilterCustomerDto,
  ) {
    return this.customer.findAllReseller(params);
  }

  @Roles(Role.ADMIN, Role.OPERATOR)
  @Get('reseller/:companyId')
  @ApiOperation({ summary: 'Customer list of the company' })
  @HttpCode(HttpStatus.ACCEPTED)
  getAllCustomers(
    @Param('companyId') company_id: number,
    @Query() params: FilterCustomerDto,
  ) {
    return this.customer.findAllByCompany(company_id, params);
  }

  @Roles(Role.ADMIN, Role.OPERATOR)
  @Get('one/:customerId')
  @ApiOperation({ summary: 'consult a specific customer of the company' })
  @HttpCode(HttpStatus.ACCEPTED)
  getOneCustomer(
    @Param('customerId') customer_id: number,
  ) {
    return this.customer.findOne(customer_id);
  }

  @Roles(Role.ADMIN, Role.OPERATOR)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateCustomerDto){
    return this.customer.create(payload)
  }

  @Roles(Role.ADMIN, Role.OPERATOR)
  @Put(':customerId')
  @HttpCode(HttpStatus.OK)
  update(
    @Param('customerId', ParseIntPipe) customer_id: number,
    @Body() payload: UpdateCustomerDto
  ){
    return this.customer.update(customer_id, payload);
  }

  @Roles(Role.ADMIN, Role.OPERATOR)
  @Delete(':customerId')
  delete( @Param('customerId', ParseIntPipe) customer_id: number){
    return this.customer.delete(customer_id);
  }
}
