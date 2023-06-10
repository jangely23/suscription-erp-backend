import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomersController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { Customer } from './entities/customer.entity';
import { CustomerTypeController } from './controllers/customer_type.controller';
import { CustomerTypeService } from './services/customer_type.service';
import { Customer_type } from './entities/customer_type.entity';
import { Product } from 'src/products/entities/product.entity';
import { Customer_order } from 'src/orders/entities/customer_order.entity';
import { Charge_account } from 'src/charge_accounts/entities/charge_account.entity';
import { Charge_account_template } from 'src/charge_accounts/entities/charge_account_template.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Customer,
      Customer_type,
      Product,
      Customer_order,
      Charge_account,
      Charge_account_template,
      User,
    ]),
  ],
  controllers: [CustomerTypeController, CustomersController],
  providers: [CustomersService, CustomerTypeService],
  exports: [CustomersService]
})
export class CustomerModule {}
