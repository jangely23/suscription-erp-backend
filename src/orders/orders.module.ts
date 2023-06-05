import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { CustomerOrdersController } from './controllers/customer_orders.controller';
import { CustomerOrdersService } from './services/customers_orders.service';
import { Customer_order } from './entities/customer_order.entity';
import { CustomerOrderDetailsController } from './controllers/customer_order_details.controller';
import { CustomerOrderDetailsService } from './services/customer_order_details.service';
import { Customer_order_detail } from './entities/customer_order_detail.entity';
import { ProductsController } from 'src/products/controller/products.controller';
import { ProductsService } from 'src/products/services/products.service';
import { Product } from 'src/products/entities/product.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Customer_order, Customer_order_detail, Product])],
  controllers: [CustomerOrdersController, CustomerOrderDetailsController, ProductsController],
  providers: [CustomerOrdersService, CustomerOrderDetailsService, ProductsService]
})
export class OrdersModule {}
