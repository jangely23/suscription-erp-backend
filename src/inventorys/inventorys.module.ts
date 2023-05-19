import { Module } from '@nestjs/common';
import { InventorysService } from './services/inventorys.service';
import { InventorysController } from './controllers/inventorys.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stock_inventory } from './entities/stock_inventory.entity';
import { Product } from 'src/products/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Stock_inventory, Product])],
  controllers: [InventorysController],
  providers: [InventorysService]
})
export class InventoryModule {}
