import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
}