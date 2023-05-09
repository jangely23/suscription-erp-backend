import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';

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

    async findOne(company_id: number, product_id: number): Promise<Product | undefined>{
        const productOne = await this.product.findOne({
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

    async create(data: CreateProductDto){
        const productOne = await this.product.findOne({
            where:{
                stocktacking_sku: data.stocktacking_sku
            }
        });

        if(productOne){
            throw new NotAcceptableException(`stocktacking_sku ${data.stocktacking_sku} in use by another product`)
        }

        const newProduct = this.product.create(data);

        return this.product.save(newProduct);
    }

    async update(product_id: number, changes: UpdateProductDto){
        const currentProduct = await this.product.findOne({
            where:{
                product_id
            }
        });

        if(!currentProduct){
            throw new NotFoundException('Product not found');
        }

        this.product.merge(currentProduct, changes);
        return this.product.save(currentProduct);
    }

    async delete(product_id: number){
        const product = await this.product.findOne({
            where:{
                product_id
            }
        });

        if(!product){
            throw new NotFoundException('Product not found');
        }

        return this.product.delete(product);
    }
}
