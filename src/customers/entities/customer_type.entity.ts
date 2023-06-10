import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Customer } from './customer.entity';

@Entity('customer_types')
export class Customer_type {
    @PrimaryGeneratedColumn()
    customer_type_id: number;

   
    @Column({type:'varchar', length:30})
    customer_type: string;

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

    // Bidirectional relation foreing keys
    @OneToMany(() => Customer, (customer)=> customer.customer_type)
    customers: Customer[];
}
