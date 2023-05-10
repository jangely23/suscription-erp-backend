import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('Product_type')
export class Product_type {
    @PrimaryGeneratedColumn()
    product_type_id: number;

    @Column({ type:'varchar', length: 80 })
    product_type: string;

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