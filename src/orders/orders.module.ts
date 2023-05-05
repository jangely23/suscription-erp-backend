import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomerOrdersController } from './controllers/customer_orders.controller';
import { CustomerOrdersService } from './services/customers_orders.service';
import { Customer } from 'src/customers/entities/customer.entity';
import { CustomerOrderDetailsController } from './controllers/customer_order_details.controller';
import { CustomerOrderDetailsService } from './services/customer_order_details.service';
import { Customer_order_detail } from './entities/customer_order_detail';


@Module({
  imports: [TypeOrmModule.forFeature([Customer,Customer_order_detail])],
  controllers: [CustomerOrdersController, CustomerOrderDetailsController],
  providers: [CustomerOrdersService, CustomerOrderDetailsService]
})
export class OrdersModule {}
