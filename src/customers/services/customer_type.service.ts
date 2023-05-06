import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer_type } from '../entities/customer_type.entity';
import { Repository } from 'typeorm';


@Injectable()
export class CustomerTypeService {
    constructor(@InjectRepository(Customer_type) private customerTypeRepo: Repository<Customer_type>){}

    findAll(){
        const customsType = this.customerTypeRepo.find();
        if(!customsType){
            throw new NotFoundException(`Custom type not found`);
        }

        return customsType;
    }

/*     findOne(customer_type_id: number){
        const customerType = this.customerTypeRepo.findOne(customer_type_id);
        if (!customerType){
            throw new NotFoundException('Product not found');
        }
        return customerType;
    } */
}
