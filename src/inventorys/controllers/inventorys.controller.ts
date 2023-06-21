import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { InventorysService } from '../services/inventorys.service';
import { CreateStockInventoryDto, FilterStockInventoryDto, UpdateStockInventoryDto } from '../dtos/stock_inventory.dto';
import { ApikeyGuard } from 'src/auth/guards/apikey.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';

@ApiBearerAuth()
@ApiTags('Inventory management')
@UseGuards(ApikeyGuard, JwtAuthGuard, RoleGuard)
@ApiTags('inventory management')
@Controller('inventorys')
export class InventorysController {
    constructor(private stockInventory: InventorysService) {}

    @Get(':companyId')
    @HttpCode(HttpStatus.ACCEPTED)
    getAllstocksinventory(
        @Param('companyId', ParseIntPipe) company_id: number, 
        @Query() params: FilterStockInventoryDto, 
    ){
        return this.stockInventory.findAll(company_id, params);
    }

    @Get('one/:stockInventoryId')
    @HttpCode(HttpStatus.ACCEPTED)
    getOnestockinventory(@Param('stockInventoryId', ParseIntPipe)stock_inventory_id: number ){
        return this.stockInventory.findOne(stock_inventory_id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() payload: CreateStockInventoryDto){
        return this.stockInventory.create(payload);
    }

    @Put(':stockInventoryId')
    @HttpCode(HttpStatus.OK)
    update(
        @Param('stockInventoryId', ParseIntPipe) stock_inventory_id: number, 
        @Body() payload: UpdateStockInventoryDto
    ){
        return this.stockInventory.update(stock_inventory_id, payload);
    }

    @Delete(':stockInventoryId')
    delete(@Param('stockInventoryId', ParseIntPipe) stock_inventory_id: number){
        return this.stockInventory.delete(stock_inventory_id);
    }
}
