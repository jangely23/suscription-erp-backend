import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('Charge_account_template')
export class Charge_account_template {
    @PrimaryGeneratedColumn()
    charge_account_template_id: number;

    @Column({ type:'int' })
    customer_id: number;
    
    @Column({ type:'int' })
    company_id: number;

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
}