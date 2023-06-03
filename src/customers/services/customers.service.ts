import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from '../entities/customer.entity';
import { Repository } from 'typeorm';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';

@Injectable()
export class CustomersService {
    constructor(
        @InjectRepository(Customer)
        private customer: Repository<Customer>,     
    ){}

    findAll(company_id: number){
        const customer = this.customer.find({
            relations:{
                parent_customer:true,
            },
            where: {
                parent_customer:{
                    customer_id:company_id,
                }
            } 
        });

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
        const currenCustomer = await this.customer.findOne({
            where: { customer_id }
        })

        if(!currenCustomer){
            throw new NotFoundException('Custom not found');
        }

        this.customer.merge(currenCustomer, change);

        return this.customer.save(currenCustomer);
    }

    async delete(customer_id: number){
        const currenCustomer = await this.customer.findOne({
            where: { customer_id }
        })

        if(!currenCustomer){
            throw new NotFoundException('Custom not found');
        }

        return this.customer.delete(customer_id);
    }
}
