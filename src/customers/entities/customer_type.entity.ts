import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('Customer_type')
export class Customer_type {
    @PrimaryGeneratedColumn()
    customer_type_id: number;

    @Column({ type:'varchar', length: 80 })
    customer_type: string;

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
