import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('Charge_account')
export class Charge_account {
    @PrimaryGeneratedColumn()
    charge_account_id: number;

    @Column({ type:'int' })
    customer_id: number;
    
    @Column({ type:'int' })
    company_id: number;

    @Column({ type:'int' })
    charge_account_type_id: number;

    @Column({ type:'enum', enum:[ 'pending','payment','suspended','eliminate' ] })
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