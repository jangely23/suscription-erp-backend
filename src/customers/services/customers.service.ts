import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from '../entities/customer.entity';
import { Repository } from 'typeorm';
import { CreateCustomerDto, FilterCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';

@Injectable()
export class CustomersService {
    constructor(
        @InjectRepository(Customer)
        private customer: Repository<Customer>,     
    ){}

    async findAll(company_id: number, params?: FilterCustomerDto){
        
        let customer;

        if(params){
            const {limit, offset} = params;

            customer = await this.customer.find({
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
                    parent_customer:true,
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
                products:true
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

    create(data: CreateCustomerDto){
        const newCustomer = this.customer.create(data)

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
