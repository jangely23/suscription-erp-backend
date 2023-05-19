import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer_order_detail } from '../entities/customer_order_detail.entity';
import { Repository } from 'typeorm';
import { CreateCustomerOrderDetailDto, UpdateCustomerOrderDetailDto } from '../dtos/customer_order_detail.dto';

@Injectable()
export class CustomerOrderDetailsService {
    /* constructor(
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


    async findOne(customer_order_detail_id: number): Promise<Customer_order_detail | undefined>{
        const oneOrderDetail = await this.customer_order_detail.findOne({
            where: {
                customer_order_detail_id
            },
        })

        if(!oneOrderDetail){
            throw new NotFoundException('Customer order detail not found');
        }

        return oneOrderDetail;
    }


    create(data: CreateCustomerOrderDetailDto){
        const orderDetail = this.customer_order_detail.create(data);
 
        return this.customer_order_detail.save(orderDetail);
    }


    async update(customer_order_detail_id: number, changes: UpdateCustomerOrderDetailDto) {
        const oneOrderDetail = await this.customer_order_detail.findOne({
            where: {
                customer_order_detail_id
            },
        })

        if(!oneOrderDetail){
            throw new NotFoundException('Customer order detail not found');
        }

        this.customer_order_detail.merge(oneOrderDetail, changes);
        
        return this.customer_order_detail.save(oneOrderDetail);
    }

    async delete(customer_order_detail_id: number) {
        const orderDetail = await this.customer_order_detail.findOne({
            where: {
                customer_order_detail_id
            },
        })

        if(!orderDetail){
            throw new NotFoundException('Customer order detail not found');
        }
        
        return this.customer_order_detail.delete(orderDetail);
    } */
}
