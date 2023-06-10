import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsController } from './controller/products.controller';
import { ProductsService } from './services/products.service';
import { Product } from './entities/product.entity';

import { ProductTypeController } from './controller/product_type.controller';
import { ProductTypeService } from './services/product_type.service';
import { Product_type } from './entities/product_type.entity';

import { CustomersController } from 'src/customers/controllers/customers.controller';
import { CustomersService } from 'src/customers/services/customers.service';
import { Customer } from 'src/customers/entities/customer.entity';
import { CustomerModule } from 'src/customers/customers.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      Product_type,
      Customer,
    ]),
    CustomerModule,
  ],
  controllers: [ProductsController, ProductTypeController, CustomersController],
  providers: [ProductsService, ProductTypeService, CustomersService],
  exports: [ProductsService, ProductTypeService],
})
export class ProductsModule {}
