import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer_order_detail } from '../entities/customer_order_detail';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerOrderDetailsService {
    constructor(
        @InjectRepository(Customer_order_detail) 
        private customer_order_detail: Repository<Customer_order_detail>,
    ){}

    findAll(customer_order_id: number): Promise<Customer_order_detail[]>{
        const allOrderDetail = this.customer_order_detail.find({
            where: {
                customer_order_id
            },
        })

        if(!allOrderDetail){
            throw new NotFoundException('Customer order detail is empty');
        }

        return allOrderDetail;
    }
}
