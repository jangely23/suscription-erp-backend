import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, ManyToOne ,} from 'typeorm';
import { Product_type } from './product_type.entity';
import { Customer } from 'src/customers/entities/customer.entity';


@Entity('Product')
export class Product {
    @PrimaryGeneratedColumn()
    product_id: number;

    @ManyToOne(() => Product_type, (product_type)=> product_type.products)
    product_type: Product_type;
    
    @ManyToOne(() => Customer, (customer)=> customer.products)
    company: Customer;

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
}