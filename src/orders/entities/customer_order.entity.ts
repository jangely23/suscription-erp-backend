import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('Customer_order')
export class Customer_order {
    @PrimaryGeneratedColumn()
    customer_order_id: number;

    @Column({ type:'int' })
    customer_id: number;
    
    @Column({ type:'int' })
    company_id: number;

    @Column({ type:'enum', enum:[ 'pending','process','success','cancelled' ] })
    state: string;

    @Column({ type:'double' })
    full_value: number;

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