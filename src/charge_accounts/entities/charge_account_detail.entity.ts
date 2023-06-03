import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Charge_account } from "./charge_account.entity";
import { Product } from "src/products/entities/product.entity";

@Entity('Charge_account_detail')
export class Charge_account_detail {
    @PrimaryGeneratedColumn()
    charge_account_detail_id: number;

    @Column({ type:'text'})
    observation: string;

    @Column({ type:'int' })
    quantity: number;

    @Column({ type:'double' })
    unit_value: number;

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

    @ManyToOne(() => Charge_account, (charge_account) => charge_account.charge_account_details)
    charge_account: Charge_account;
    
    @ManyToOne(() => Product, (product) => product.charge_account_details)
    product = Product;

}