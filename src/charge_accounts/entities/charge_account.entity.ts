import { Customer } from "src/customers/entities/customer.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Charge_account_type } from "./charge_account_type.entity";
import { Charge_account_detail } from "./charge_account_detail.entity";

@Entity('charge_accounts')
export class Charge_account {
    @PrimaryGeneratedColumn()
    charge_account_id: number;

    @Column({ type:'enum', enum:[ 'pending','payment','suspended','eliminate','none'] })
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

    @ManyToOne(()=> Customer, (customer)=> customer.charge_account_customer)
    @JoinColumn({name: 'customer_id'})
    customer: Customer;
    
    @ManyToOne(()=> Customer, (customer) => customer.charge_account_company)
    @JoinColumn({name: 'company_id'})
    company: Customer;

    @ManyToOne(()=> Charge_account_type, (charge_account_type)=> charge_account_type.charge_account)
    @JoinColumn({name: 'charge_account_type_id'})
    charge_account_type: Charge_account_type;

    // Bidirectional relationship foreign keys from another table
        
    @OneToMany(() => Charge_account_detail, (charge_account_detail)=> charge_account_detail.charge_account)
    charge_account_details: Charge_account_detail[];
}