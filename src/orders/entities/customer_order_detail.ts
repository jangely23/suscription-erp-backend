import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('Customer_order_detail')
export class Customer_order_detail {
    @PrimaryGeneratedColumn()
    customer_order_detail_id: number;

    @Column({ type:'int' })
    customer_order_id: number;
    
    @Column({ type:'int' })
    product_id: number;

    @Column({ type:'int' })
    quantity: number;

    @Column({ type:'double' })
    value: number;

    @Column({ type:'datetime' })
    creation_date: string;
}