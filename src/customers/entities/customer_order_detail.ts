import { PrimaryGeneratedColumn, Column } from 'typeorm';

export class Customer_order_detail {
    @PrimaryGeneratedColumn()
    customer_order_detail_id: number;

    @Column({ type:'int' })
    customer_order_id: number;
    
    @Column({ type:'int' })
    product_id: number;

    @Column({ type:'datetime' })
    creation_date: string;
}