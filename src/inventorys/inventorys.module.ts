import { Module } from '@nestjs/common';
import { ControllersController } from './controllers/invetorys.controller';
import { OrdersController } from './orders/orders.controller';
import { InventorysService } from './services/inventorys.service';
import { InventorysController } from './controllers/inventorys.controller';

@Module({
  controllers: [ControllersController, OrdersController, InventorysController],
  providers: [InventorysService]
})
export class InventoryModule {}
