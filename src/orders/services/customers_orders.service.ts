import { Injectable, NotFoundException, ResponseDecoratorOptions } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer_order } from '../entities/customer_order.entity';
import { Repository } from 'typeorm';
import { CreateCustomerOrderDto, FilterCustomerOrderDto, UpdateCustomerOrderDto } from '../dtos/customer_order.dto';

@Injectable()
export class CustomerOrdersService {
    constructor(
        @InjectRepository(Customer_order)
        private customer_order: Repository<Customer_order>,
    ){}

    async findAllByCompany(company_id: number, params: FilterCustomerOrderDto): Promise<Customer_order[]>{
        
        let allOrders;

        if(params){
            const {limit, offset} =params;

            allOrders = await this.customer_order.find({
                where:{
                    company:{
                        customer_id: company_id,
                    }
                },
                take: limit,
                skip: offset
            })
        }else{
            allOrders = await this.customer_order.find({
                where:{
                    company:{
                        customer_id: company_id,
                    }
                }
            })
        }

        if(!allOrders){
            throw new NotFoundException('Company orders is empty');
        }

        return allOrders;
    }

    async findAllByCustomer(company_id: number, customer_id: number, params: FilterCustomerOrderDto): Promise<Customer_order[]>{
        let allOrders;

        if(params){
            const {limit, offset} =params;
        
            allOrders = await this.customer_order.find({
                where:{
                    company:{
                        customer_id: company_id,
                    },
                    customer:{
                        customer_id: customer_id,
                    }
                },
                take: limit,
                skip: offset
            })
        }else{
            allOrders = await this.customer_order.find({
                where:{
                    company:{
                        customer_id: company_id,
                    },
                    customer:{
                        customer_id: customer_id,
                    }
                }
            })
        }

        if(!allOrders){
            throw new NotFoundException('Customer orders is empty');
        }

        return allOrders;
    }

    async findOne(customer_order_id: number): Promise<Customer_order | undefined>{
        const order = await this.customer_order.findOne({
            where:{
                customer_order_id,
            }
        })

        if(!order){
            throw new NotFoundException('Customer orders is empty');
        }

        return order
    }

    create(data: CreateCustomerOrderDto){
        const customerOrder = this.customer_order.create(data);

        return this.customer_order.save(customerOrder);
    }
    
    async update(customer_order_id: number, changes: UpdateCustomerOrderDto){
        const order = await this.customer_order.findOne({
            where:{
                customer_order_id,
            }
        })

        if(!order){
            throw new NotFoundException('Customer order not found');
        }

        this.customer_order.merge(order, changes);

        return this.customer_order.save(order);
    }

    async delete(customer_order_id: number){
        const order = await this.customer_order.findOne({
            where:{
                customer_order_id,
            }
        })

        if(!order){
            throw new NotFoundException('Customer order not found');
        }

        return this.customer_order.delete(customer_order_id);
    }

}
