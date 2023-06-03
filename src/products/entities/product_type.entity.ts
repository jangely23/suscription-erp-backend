import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity('Product_type')
export class Product_type {
    @PrimaryGeneratedColumn()
    product_type_id: number;

    @Column({ type:'varchar', length: 70 })
    product_type: string;

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
    
    @OneToMany(() => Product, (product)=> product.product_type)
    products: Product[];
}