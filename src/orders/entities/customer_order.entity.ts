import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Customer_order {
    @PrimaryGeneratedColumn()
    customer_order_id: number;

    @Column({ type:'int' })
    customer_id: number;
    
    @Column({ type:'int' })
    company_id: number;

    @Column({ type:'int' })
    state: number;

    @Column({ type:'double' })
    full_value: number;

    @Column({ type:'datetime' })
    creation_date: string;
}