import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('Customer_order_detail')
export class Customer_order_detail {
    @PrimaryGeneratedColumn()
    customer_order_detail_id: number;

    @Column({ type:'int' })
    customer_order_id: number;
    
    @Column({ type:'int' })
    product_id: number;

    @Column({ type:'int' })
    quantity: number;

    @Column({ type:'double' })
    value: number;

    @CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    })
    creation_date: Date;

    @UpdateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    })
    update_date: Date;
}