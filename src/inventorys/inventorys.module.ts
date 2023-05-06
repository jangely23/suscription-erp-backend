import { Module } from '@nestjs/common';
import { InventorysService } from './services/inventorys.service';
import { InventorysController } from './controllers/inventorys.controller';

@Module({
  controllers: [InventorysController],
  providers: [InventorysService]
})
export class InventoryModule {}
