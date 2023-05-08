import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('Product_type')
export class Product_type {
    @PrimaryGeneratedColumn()
    product_type_id: number;

    @Column({ type:'varchar', length: 80 })
    product_type: string;

}