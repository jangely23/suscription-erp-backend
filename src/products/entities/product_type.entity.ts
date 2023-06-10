import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity('product_types')
export class Product_type {
    @PrimaryGeneratedColumn()
    product_type_id: number;

    @Column({ type:'varchar', length: 70 })
    product_type: string;

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
    
    @OneToMany(() => Product, (product)=> product.product_type)
    products: Product[];
}