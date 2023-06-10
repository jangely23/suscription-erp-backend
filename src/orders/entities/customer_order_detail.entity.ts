import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Customer_order } from './customer_order.entity';
import { Product } from 'src/products/entities/product.entity';

@Entity('customer_order_details')
export class Customer_order_detail {
    @PrimaryGeneratedColumn()
    customer_order_detail_id: number;

    @Column({ type:'int' })
    quantity: number;

    @Column({ type:'double' })
    unit_value: number;

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

    @ManyToOne(() => Customer_order, (customer_order)=> customer_order.customer_order_details)
    @JoinColumn({name: 'customer_order_id'})
    customer_order: Customer_order;

    @ManyToOne(() => Product, (product)=> product.customer_order_details)
    @JoinColumn({name: 'product_id'})
    product: Product;
}