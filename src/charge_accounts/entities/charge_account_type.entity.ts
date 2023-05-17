import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Charge_account } from "./charge_account.entity";
import { Charge_account_template } from "./charge_account_template.entity";

@Entity('Charge_account_type')
export class Charge_account_type {
    @PrimaryGeneratedColumn()
    charge_account_type_id: number;

    @Column({ type:'enum', enum:['mensual', 'bimestral', 'trimestral', 'semestral', 'anual'] })
    frequency: number;
    
    @Column({ type:'int' })
    amount: number;

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

    // Bidirectional relationship foreign keys from another table
    @OneToMany(()=>Charge_account, (charge_account) => charge_account.charge_account_type)
    charge_account: Charge_account[];

    @OneToMany(()=>Charge_account_template, (charge_account_template) => charge_account_template.charge_account_type)
    charge_account_template: Charge_account[];
}