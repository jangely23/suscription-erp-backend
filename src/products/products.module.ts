import { Module } from '@nestjs/common';
import { TypeOrmModule  } from '@nestjs/typeorm';

import { ProductsController } from './controller/products.controller';
import { ProductsService } from './services/products.service';
import { Product } from './entities/product.entity';
import { ProductTypeController } from './controller/product_type.controller';
import { ProductTypeService } from './services/product_type.service';
import { Product_type } from './entities/product_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Product_type])],
  controllers: [ProductsController, ProductTypeController],
  providers: [ProductsService, ProductTypeService]
})
export class ProductsModule {}
