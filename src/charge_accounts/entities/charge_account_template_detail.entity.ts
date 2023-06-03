import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Charge_account_template } from "./charge_account_template.entity";
import { Product } from "src/products/entities/product.entity";

@Entity('Charge_account_template_detail')
export class Charge_account_template_detail {
    @PrimaryGeneratedColumn()
    charge_account_template_detail_id: number;

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

    @ManyToOne(() => Charge_account_template, (charge_account_template) => charge_account_template.charge_account_template_details)
    charge_account_template: Charge_account_template;
        
    @ManyToOne(() => Product, (product) => product.charge_account_template_details)
    product = Product;
}