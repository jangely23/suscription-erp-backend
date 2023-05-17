import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Customer } from './customer.entity';

@Entity('Customer_type')
export class Customer_type {
    @PrimaryGeneratedColumn()
    customer_type_id: number;

   
    @Column({type:'enum', enum:['reseller','company','client'], default:'active'})
    customer_type: string;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    creation_date: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    update_date: Date;

    // Own foreign keys
    @OneToMany(() => Customer, (customer)=> customer.customer_type)
    customers: Customer[];
}
