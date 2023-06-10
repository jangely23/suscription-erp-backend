import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Charge_account_type } from "./charge_account_type.entity";
import { Customer } from "src/customers/entities/customer.entity";
import { Charge_account_template_detail } from "./charge_account_template_detail.entity";

@Entity('charge_account_templates')
export class Charge_account_template {
    @PrimaryGeneratedColumn()
    charge_account_template_id: number;

    @Column({ type:'enum', enum:[ 'inactive','active','eliminate', 'none' ] })
    status: string;

    @Column({ type:'double' })
    full_value: number;

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

    @ManyToOne(()=> Customer, (customer)=> customer.charge_account_template_customer)
    @JoinColumn({name: 'customer_id'})
    customer: Customer;
    
    @ManyToOne(()=> Customer, (customer) => customer.charge_account_template_company)
    @JoinColumn({name: 'company_id'})
    company: Customer;

    @ManyToOne(()=> Charge_account_type, (charge_account_type)=> charge_account_type.charge_account_template)
    @JoinColumn({name: 'charge_account_type_id'})
    charge_account_type: Charge_account_type;

    // Bidirectional relationship foreign keys from another table
    
    @OneToMany(() => Charge_account_template_detail, (charge_account_template_detail)=> charge_account_template_detail.charge_account_template)
    charge_account_template_details: Charge_account_template_detail[];

}