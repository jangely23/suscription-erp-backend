import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany ,} from 'typeorm';
import { Product_type } from './product_type.entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { Customer_order_detail } from 'src/orders/entities/customer_order_detail.entity';
import { Charge_account_detail } from 'src/charge_accounts/entities/charge_account_detail.entity';
import { Charge_account_template_detail } from 'src/charge_accounts/entities/charge_account_template_detail.entity';
import { Stock_inventory } from 'src/inventorys/entities/stock_inventory.entity';


@Entity('Product')
export class Product {
    @PrimaryGeneratedColumn()
    product_id: number;

    @Column({ type:'varchar', length: 100 })
    name: string;

    @Column({ type:'varchar', length: 30 })
    reference: string;

    @Column({ type:'varchar', length: 30 })
    stocktacking_sku: string;

    @Column({ type:'int' })
    size: number;

    @Column({ type:'varchar', length: 30 })
    unit_of_measurement: string;

    @Column({ type:'text' })
    description: string;

    @Column({ type:'varchar', length: 30 })
    lote: string;

    @Column({ type:'enum', enum:['inactive','active','sold_out','eliminate'] })
    state: string;

    @Column({ type:'int' })
    quantity: number;

    @Column({ type:'double' })
    price: number;

    @Column({ type:'int' })
    sale: number;

    @Column({ type:'int' })
    iva: number;

    @Column({ type:'double' })
    cost_price: number;
    
    @Column({ type:'varchar', length: 130 })
    image: string;

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
    
    @ManyToOne(() => Product_type, (product_type)=> product_type.products)
    product_type: Product_type;
    
    @ManyToOne(() => Customer, (customer)=> customer.products)
    company: Customer;

    // Bidirectional relationship foreign keys from another table

    @OneToMany(() => Customer_order_detail, (customer_order_detail)=> customer_order_detail.product)
    customer_order_details: Customer_order_detail[];

    @OneToMany(() => Charge_account_detail, (charge_account_detail)=> charge_account_detail.product)
    charge_account_details: Customer_order_detail[];

    @OneToMany(() => Charge_account_template_detail, (charge_account_template_detail)=> charge_account_template_detail.product)
    charge_account_template_details: Customer_order_detail[];

    @OneToMany(() => Stock_inventory, (stock_inventory)=> stock_inventory.product)
    stock_inventory: Stock_inventory[];

}