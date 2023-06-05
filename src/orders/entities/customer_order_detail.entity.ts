import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Customer_order } from './customer_order.entity';
import { Product } from 'src/products/entities/product.entity';

@Entity('Customer_order_detail')
export class Customer_order_detail {
    @PrimaryGeneratedColumn()
    customer_order_detail_id: number;

    @Column({ type:'int' })
    quantity: number;

    @Column({ type:'double' })
    unit_value: number;

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

    @ManyToOne(() => Customer_order, (customer_order)=> customer_order.customer_order_details)
    customer_order: Customer_order;

    @ManyToOne(() => Product, (product)=> product.customer_order_details)
    product: Product;
}