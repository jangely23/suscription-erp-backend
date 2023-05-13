import { Product } from 'src/products/entities/product.entity';
import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import { Customer_type } from './customer_type.entity';
@Entity('Customer')
export class Customer {
    @PrimaryGeneratedColumn()
    customer_id: number;

    @ManyToOne(() => Customer_type, (customer_type)=> customer_type.customers)
    customer_type: number;
    
    @OneToMany(() => Customer, (customer)=> customer.parent_customer)
    companys: Customer[];

    @ManyToOne(() => Customer, (customer)=> customer.companys)
    parent_customer: Customer;

    @OneToMany(() => Product, (product)=> product.company)
    products: Product[];

    @Column({ type:'varchar', length: 100 })
    name: string;

    @Column({ type:'varchar', length: 20 })
    cc_nit: string;

    @Column({ type:'varchar', length: 150 })
    address: string;
    
    @Column({ type:'varchar', length: 20 })
    city: string;

    @Column({ type:'varchar', length: 100 })
    country: string;

    @Column({type:'enum', enum:['inactive','active','demo','suspended','eliminate'], default:'active'})
    state:  string;

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
}
