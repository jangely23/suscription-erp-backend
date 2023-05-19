import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product_type } from '../entities/product_type.entity';
import { Repository } from 'typeorm';
import { CreateProductTypeDto, UpdateProductTypeDto } from '../dtos/product_type.dto';

@Injectable()
export class ProductTypeService {
    /* constructor(
        @InjectRepository(Product_type)
        private product_type: Repository<Product_type>,
    ){}

    findAll(): Promise<Product_type[]>{
        const productType = this.product_type.find();

        if(!productType){
            throw new NotFoundException('Product type empty')
        }

        return productType
    }

    async findOne(product_type_id: number): Promise<Product_type | undefined> {
        const productType = await this.product_type.findOne({
            where:{
                product_type_id
            }
        });

        if(!productType){
            throw new NotFoundException('Product type empty')
        }

        return productType
    }

    create(data: CreateProductTypeDto){
        const newProduct = this.product_type.create(data);
        return this.product_type.save(newProduct);
    }

    async update(product_type_id: number, changes: UpdateProductTypeDto){
        const currentProductType = await this.product_type.findOne({
            where:{ product_type_id }
        })

        if(!currentProductType){
            throw new NotFoundException('Product not found');
        }

        this.product_type.merge(currentProductType, changes);

        return this.product_type.save(currentProductType);
    }

    async delete(product_type_id: number){
        const productType = await this.product_type.findOne({
            where:{ product_type_id }
        });

        if(!productType){
            throw new NotFoundException('Product not found');
        }

        return this.product_type.delete(product_type_id)
    } */

}

