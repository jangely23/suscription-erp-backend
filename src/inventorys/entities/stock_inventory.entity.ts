import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "src/products/entities/product.entity";

@Entity('Stock_inventory')
export class Stock_inventory {
    @PrimaryGeneratedColumn()
    stock_inventory_id: number;

    @Column({ type:'enum', enum:['add','deduct'] })
    action: string;

    @Column({ type:'int' })
    quantity: number;

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
    
    @ManyToOne(() => Product, (product) => product.stock_inventory)
    product = Product;

}