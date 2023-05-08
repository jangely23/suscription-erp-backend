import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from '../entities/customer.entity';
import { Repository } from 'typeorm';
import { promises } from 'dns';

@Injectable()
export class CustomersService {
    constructor(
        @InjectRepository(Customer)
        private customer: Repository<Customer>,     
    ){}

    findAll(company_id: number): Promise<Customer[]> {
        const customer = this.customer.find({
            where: {
                parent_id: company_id
            } 
        });

        if(!customer){
            throw new NotFoundException(`Customer empty`);
        }

        return customer;
    }

    findOne(company_id:number, customer_id: number): Promise<Customer | undefined>{
        const customer = this.customer.findOne({
            where:{
                parent_id: company_id,
                customer_id: customer_id
            }
        });

        if(!customer){
            throw new InternalServerErrorException('Custom type error');
        }

        return customer;
    }
}
