import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomersController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { Customer } from './entities/customer.entity';
import { CustomerTypeController } from './controllers/customer_type.controller';
import { CustomerTypeService } from './services/customer_type.service';
import { Customer_type } from './entities/customer_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, Customer_type])],
  controllers: [CustomerTypeController, CustomersController],
  providers: [CustomersService, CustomerTypeService]
})
export class UsersModule {}
