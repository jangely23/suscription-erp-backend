import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import { Customer_order_detail } from './customer_order_detail.entity';
import { Customer } from 'src/customers/entities/customer.entity';

@Entity('Customer_order')
export class Customer_order {
    @PrimaryGeneratedColumn()
    customer_order_id: number;

    @Column({ type:'enum', enum:[ 'pending','process','success','cancelled','none' ] })
    state: string;

    @Column({ type:'double' })
    full_value: number;

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

    @ManyToOne(()=>Customer, (customer)=> customer.customer_order_company)
    company: Customer;

    @ManyToOne(()=>Customer, (customer)=> customer.customer_order_customer)
    customer: Customer;

    // Bidirectional relationship foreign keys from another table
    
    @OneToMany(() => Customer_order_detail, (customer_order_detail)=> customer_order_detail.customer_order)
    customer_order_details: Customer_order_detail[];
}