import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product_type } from '../entities/product_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductTypeService {
    constructor(
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

    findOne(product_type_id: number): Promise<Product_type | undefined> {
        const productType = this.product_type.findOne({
            where:{
                product_type_id
            }
        });

        if(!productType){
            throw new NotFoundException('Product type empty')
        }

        return productType
    }
}
