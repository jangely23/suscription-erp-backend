import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('Customer_type')
export class Customer_type {
    @PrimaryGeneratedColumn()
    customer_type_id: number;

    @Column({ type:'int' })
    customer_type: number;
}
