import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Customer_order_detail } from './customer_order_detail.entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { Expose } from 'class-transformer';

@Entity('customer_orders')
export class Customer_order {
    @PrimaryGeneratedColumn()
    customer_order_id: number;

    @Column({ type:'enum', enum:[ 'pending','process','success','cancelled','none' ] })
    status: string;

    @Column({ type:'double' })
    full_value: number;

    @CreateDateColumn({
        name: 'creation_date',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    creation_date: Date;

    @UpdateDateColumn({
        name: 'update_date',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    update_date: Date;   

    // Own foreign keys

    @ManyToOne(()=>Customer, (customer)=> customer.customer_order_company)
    @JoinColumn({name: 'company_id'})
    company: Customer;

    @ManyToOne(()=>Customer, (customer)=> customer.customer_order_customer)
    @JoinColumn({name: 'customer_id'})
    customer: Customer;

    // Bidirectional relationship foreign keys from another table
    
    @OneToMany(() => Customer_order_detail, (customer_order_detail)=> customer_order_detail.customer_order)
    customer_order_details: Customer_order_detail[];

}