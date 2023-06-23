import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from '../entities/customer.entity';
import { Repository } from 'typeorm';
import { CreateCustomerDto, FilterCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
import { CustomerTypeService } from './customer_type.service';

@Injectable()
export class CustomersService {
    constructor(
        @InjectRepository(Customer)
        private customer: Repository<Customer>, 
        private customerTypeService: CustomerTypeService    
    ){}

    async findAllReseller(params?: FilterCustomerDto){
        
        let customer;

        if(params){
            const {limit, offset} = params;

            customer = await this.customer.find({
                where: {
                    customer_type:{
                        customer_type: 'distribuidor',
                    }
                },
                take: limit,
                skip: offset 
            }); 
        }else{
            customer = await this.customer.find({
                relations:{
                    parent_customer:true,
                },
                where: {
                    customer_type:{
                        customer_type: 'distribuidor',
                    }
                } 
            });   
        }

        if(!customer){
            throw new NotFoundException(`Customer type reseller is empty`);
        }

        return customer;
    }

    async findAllByCompany(company_id: number, params?: FilterCustomerDto){
        
        let customer;

        if(params){
            const {limit, offset} = params;

            customer = await this.customer.find({
                relations:{
                    customer_type: true,
                },
                where: {
                    parent_customer:{
                        customer_id:company_id,
                    }
                },
                take: limit,
                skip: offset 
            }); 
        }else{
            customer = await this.customer.find({
                relations:{
                    parent_customer: true,
                    customer_type: true
                },
                where: {
                    parent_customer:{
                        customer_id:company_id,
                    }
                } 
            });   
        }

        if(!customer){
            throw new NotFoundException(`Customer empty`);
        }

        return customer;
    }

    async findOne(customer_id: number): Promise<Customer | undefined>{
        const customer = await this.customer.findOne({
            relations:{
                products:true,
            },
            where:{
                customer_id
            }
        });

        if(!customer){
            throw new NotFoundException('Custom not found');
        }

        return customer;
    }

    async create(data: CreateCustomerDto){
        const clientIfExist = await this.customer.findOne({
            where:{
                cc_nit: data.cc_nit
            }
        });

        if(clientIfExist){
            throw new NotAcceptableException(`CC_NIT ${data.cc_nit} in use by another customer`)
        }
        
        const newCustomer = this.customer.create(data)

        if(data.customer_type_id){
 
            const customerType = await this.customerTypeService.findOne(data.customer_type_id);

            console.log(customerType);
            if(!customerType){
                throw new NotFoundException(`Customer_type_id not found`);
            }

            newCustomer.customer_type = customerType;
        }

        if(data.parent_id){
            const parent = await this.findOne(data.parent_id);

            newCustomer.parent_customer = parent;
        }

        return this.customer.save(newCustomer);
    }

    async update(customer_id: number, change: UpdateCustomerDto) {
        const currentCustomer = await this.customer.findOne({
            where: { customer_id }
        })

        if(!currentCustomer){
            throw new NotFoundException('Custom not found');
        }

        this.customer.merge(currentCustomer, change);

        return this.customer.save(currentCustomer);
    }

    async delete(customer_id: number){
        const currentCustomer = await this.customer.findOne({
            where: { customer_id }
        })

        if(!currentCustomer){
            throw new NotFoundException('Custom not found');
        }

        return this.customer.delete(customer_id);
    }
}
