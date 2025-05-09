import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

import { CreateProductDto, FilterProductsDto, UpdateProductDto } from '../dtos/product.dto';

import { CustomersService } from 'src/customers/services/customers.service';
import { ProductTypeService } from './product_type.service';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product) 
        private product: Repository<Product>,
        private customerService: CustomersService,
        private productTypeService: ProductTypeService,

    ){}

    async findAllProducts(company_id: number, params?: FilterProductsDto): Promise<Product[]>{
        let productAll;
        
        if(params){
            const { limit, offset } = params;

            productAll = await this.product.find({
                where:{
                    company:{
                        customer_id:company_id,
                    },
                    product_type:{
                        product_type: "producto"
                    }
                },
                take: limit,
                skip: offset

            });
        }else{
            productAll = await this.product.find({
                where:{
                    company:{
                        customer_id:company_id,
                    },
                    product_type:{
                        product_type_id:2
                    }
                },

            });
        }

        if(!productAll){
            throw new NotFoundException('Product is empty');
        }

        return productAll;
    }

    async findAllServices(company_id: number, params?: FilterProductsDto){
        let serviceAll;
        
        if(params){
            const { limit, offset } = params;

            serviceAll = await this.product.find({
                where:{
                    company:{
                        customer_id:company_id,
                    },
                    product_type:{
                        product_type: 'servicio'
                    }
                },
                take: limit,
                skip: offset
    
            });
        }else{
            serviceAll = await this.product.find({
                where:{
                    company:{
                        customer_id:company_id,
                    },
                    product_type:{
                        product_type_id:1
                    }
                },

            });
        }

        if(!serviceAll){
            throw new NotFoundException('Service is empty');
        }

        return serviceAll;
    }

    async findOne(product_id: number){
        const productOne = await this.product.findOne({
            where:{
                product_id
            }
        });

        if(!productOne){
            throw new NotFoundException('Product is empty');
        }

        return productOne;
    }

    async create(data: CreateProductDto){
        const skuIfExist = await this.product.findOne({
            where:{
                stocktacking_sku: data.stocktacking_sku,
                company:{
                    customer_id: data.company_id
                }
            }
        });

        if(skuIfExist){
            throw new NotAcceptableException(`stocktacking_sku ${data.stocktacking_sku} in use by another product`)
        }

        const newProduct = this.product.create(data);

        if(data.product_type_id){
            const productType= await this.productTypeService.findOne(data.product_type_id);

            newProduct.product_type = productType;
        }

        if(data.company_id){
            const company= await this.customerService.findOne(data.company_id);
            newProduct.company = company;
        }

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

        if(changes.product_type_id){
            const productType= await this.productTypeService.findOne(changes.product_type_id);
            currentProduct.product_type = productType;
        }

        if(changes.company_id){
            const company= await this.customerService.findOne(changes.company_id);
            currentProduct.company = company;
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

        return this.product.delete(product_id);
    }
}
