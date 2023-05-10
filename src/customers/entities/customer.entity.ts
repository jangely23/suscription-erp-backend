import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn } from 'typeorm';
@Entity('Customer')
export class Customer {
    @PrimaryGeneratedColumn()
    customer_id: number;

    @Column({ type:'int' })
    customer_type_id: number;
    
    @Column({ type:'int' })
    parent_id: number;

    @Column({ type:'varchar', length: 100 })
    name: string;

    @Column({ type:'varchar', length: 20 })
    cc_nit: string;

    @Column({ type:'varchar', length: 150 })
    address: string;
    
    @Column({ type:'varchar', length: 20 })
    city: string;

    @Column({ type:'varchar', length: 100 })
    country: string;

    @Column({type:'enum', enum:['inactive','active','demo','suspended','eliminate'], default:'active'})
    state:  string;

    @CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    })
    creation_date: Date;

    @UpdateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    })
    update_date: Date;
}
