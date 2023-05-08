import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product) 
        private product: Repository<Product>,
    ){}

    findAllProducts(company_id: number): Promise<Product[]>{
        const productAll = this.product.find({
            where:{
                company_id,
                product_type_id:1
            }
        });

        if(!productAll){
            throw new NotFoundException('Product is empty');
        }

        return productAll;
    }


    findAllServices(company_id: number): Promise<Product[]>{
        const serviceAll = this.product.find({
            where:{
                company_id,
                product_type_id:2
            }
        });

        if(!serviceAll){
            throw new NotFoundException('Service is empty');
        }

        return serviceAll;
    }

    findOne(company_id: number, product_id: number): Promise<Product | undefined>{
        const productOne = this.product.findOne({
            where:{
                company_id,
                product_id
            }
        });

        if(!productOne){
            throw new NotFoundException('Product is empty');
        }

        return productOne;
    }

}
