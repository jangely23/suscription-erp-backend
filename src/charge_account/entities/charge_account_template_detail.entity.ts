import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('Charge_account_template_detail')
export class Charge_account_template_detail {
    @PrimaryGeneratedColumn()
    charge_account_template_detail_id: number;

    @Column({ type:'int' })
    charge_account_template_id: number;
    
    @Column({ type:'int' })
    product_id: number;

    @Column({ type:'text'})
    observation: string;

    @Column({ type:'int' })
    quantity: number;

    @Column({ type:'double' })
    value: number;

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