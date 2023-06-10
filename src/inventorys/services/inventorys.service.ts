import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Stock_inventory } from '../entities/stock_inventory.entity';
import { Repository } from 'typeorm';
import { CreateStockInventoryDto, FilterStockInventoryDto, UpdateStockInventoryDto } from '../dtos/stock_inventory.dto';

@Injectable()
export class InventorysService {
    constructor(
        @InjectRepository(Stock_inventory) private stock_inventory: Repository<Stock_inventory>
    ){}

    async findAll(company_id: number, params?: FilterStockInventoryDto){
        let allStockInventory;

        if(params){
            const {limit, offset} = params;

            allStockInventory = await this.stock_inventory.find({
                where: {
                    company:{
                        customer_id:company_id,
                    }
                },
                take: limit,
                skip: offset 
            }); 
        }else{
            allStockInventory = await this.stock_inventory.find({
                where: {
                    company:{
                        customer_id:company_id,
                    }
                } 
            });   
        }

        if(!allStockInventory){
            throw new NotFoundException(`Stock inventory is empty`);
        }

        return allStockInventory;
    }

    async findOne(stock_inventory_id: number) {
        const oneStockInventory = await this.stock_inventory.findOne({
            relations:{
                product:true
            },
            where:{
                stock_inventory_id
            }
        });

        if(!oneStockInventory){
            throw new NotFoundException('Stock inventory not found');
        }

        return oneStockInventory;
    }

    create(data: CreateStockInventoryDto){
        const newStockInventory = this.stock_inventory.create(data)

        return this.stock_inventory.save(newStockInventory);
    }

    async update(stock_inventory_id: number, change: UpdateStockInventoryDto) {
        const currentStockInventory = await this.stock_inventory.findOne({
            where: { stock_inventory_id }
        })

        if(!currentStockInventory){
            throw new NotFoundException('Custom not found');
        }

        this.stock_inventory.merge(currentStockInventory, change);

        return this.stock_inventory.save(currentStockInventory);
    }

    async delete(stock_inventory_id: number){
        const currentStockInventory = await this.stock_inventory.findOne({
            where: { stock_inventory_id }
        })

        if(!currentStockInventory){
            throw new NotFoundException('Custom not found');
        }

        return this.stock_inventory.delete(stock_inventory_id);
    }
}
