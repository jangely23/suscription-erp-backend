import { Product } from 'src/products/entities/product.entity';
import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import { Customer_type } from './customer_type.entity';
import { Customer_order } from 'src/orders/entities/customer_order.entity';
import { Charge_account } from 'src/charge_accounts/entities/charge_account.entity';
import { Charge_account_template } from 'src/charge_accounts/entities/charge_account_template.entity';
import { User } from 'src/users/entities/user.entity';
@Entity('Customer')
export class Customer {
    @PrimaryGeneratedColumn()
    customer_id: number;

    @Column({ type:'varchar', length: 100 })
    name: string;

    @Column({ type:'varchar', length: 20 })
    cc_nit: string;

    @Column({ type:'varchar', length: 150 })
    address: string;
    
    @Column({ type:'varchar', length: 20 })
    city: string;

    @Column({ type:'varchar', length: 50 })
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

    // Own foreign keys

    @ManyToOne(() => Customer_type, (customer_type)=> customer_type.customers)
    customer_type: Customer_type;

    @ManyToOne(() => Customer, (customer)=> customer.companys)
    parent_customer: Customer;

    // Bidirectional relationship foreign keys from another table
    
    @OneToMany(() => Customer, (customer)=> customer.parent_customer)
    companys: Customer[];
    
    @OneToMany(() => Product, (product)=> product.company)
    products: Product[];

    @OneToMany(() => User, (user)=> user.user_customer)
    users: User[];

    @OneToMany(()=> Customer_order, (customer_order) => customer_order.company)
    customer_order_company: Customer_order[];

    @OneToMany(()=> Customer_order, (customer_order) => customer_order.customer)
    customer_order_customer: Customer_order[];

    @OneToMany(()=> Charge_account, (charge_account) => charge_account.company)
    charge_account_company: Charge_account[];

    @OneToMany(()=> Charge_account, (charge_account) => charge_account.customer)
    charge_account_customer: Charge_account[];

    @OneToMany(()=> Charge_account_template, (charge_account_template) => charge_account_template.company)
    charge_account_template_company: Charge_account_template[];

    @OneToMany(()=> Charge_account_template, (charge_account_template) => charge_account_template.customer)
    charge_account_template_customer: Charge_account_template[];
}
