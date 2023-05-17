import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Charge_account_type } from "./charge_account_type.entity";
import { Customer } from "src/customers/entities/customer.entity";
import { Charge_account_template_detail } from "./charge_account_template_detail.entity";

@Entity('Charge_account_template')
export class Charge_account_template {
    @PrimaryGeneratedColumn()
    charge_account_template_id: number;

    @Column({ type:'int' })
    charge_account_type_id: number;

    @Column({ type:'enum', enum:[ 'inactive','active','eliminate' ] })
    state: string;

    @Column({ type:'double' })
    full_value: number;

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

    @ManyToOne(()=> Customer, (customer)=> customer.charge_account_template_customer)
    customer: Customer;
    
    @ManyToOne(()=> Customer, (customer) => customer.charge_account_template_company)
    company: Customer;

    @ManyToOne(()=> Charge_account_type, (charge_account_type)=> charge_account_type.charge_account_template)
    charge_account_type: Charge_account_type;

    // Bidirectional relationship foreign keys from another table
    
    @OneToMany(() => Charge_account_template_detail, (charge_account_template_detail)=> charge_account_template_detail.charge_account_template)
    charge_account_template_details: Charge_account_template_detail[];

}