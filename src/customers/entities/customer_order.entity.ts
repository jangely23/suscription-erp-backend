import { PrimaryGeneratedColumn, Column } from 'typeorm';

export class Customer_order {
    @PrimaryGeneratedColumn()
    customer_order_id: number;

    @Column({ type:'int' })
    customer_id: number;
    
    @Column({ type:'int' })
    company_id: number;

    @Column({ type:'datetime' })
    creation_date: string;
}