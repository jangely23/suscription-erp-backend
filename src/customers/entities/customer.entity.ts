import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
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

    @Column({ type:'datetime' })
    creation_date: string;

    @Column({ type:'datetime' })
    update_date: string;
}
