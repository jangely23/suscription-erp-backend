import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "src/products/entities/product.entity";
import { Customer } from "src/customers/entities/customer.entity";

@Entity('stock_inventorys')
export class Stock_inventory {
    @PrimaryGeneratedColumn()
    stock_inventory_id: number;

    @Column({ type:'enum', enum:['add','deduct','none'] })
    action: string;

    @Column({ type:'int' })
    quantity: number;

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
    
    @ManyToOne(() => Product, (product) => product.stock_inventory)
    @JoinColumn({name: 'product_id'})
    product: Product;

    @ManyToOne(() => Customer, (customer) => customer.stock_inventory)
    @JoinColumn({name: 'company_id'})
    company: Customer;

}