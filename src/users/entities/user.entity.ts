import { Customer } from "src/customers/entities/customer.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('User')
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;
    
    @Column({ type:'varchar', length: 100 })
    name: string;

    @Column({ type:'varchar', length: 20, unique: true })
    username: string;

    @Column({ type:'varchar', length: 100, unique: true })
    email: string;

    @Column({ type:'varchar', length: 16 })
    password: string;

    @Column({type:'enum', enum:['active','inactive','eliminate'], default:'active'})
    state:  string;

    @Column({type:'enum', enum:['superadmin','administrator','operator','read'], default:'administrator'})
    role:  string;

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
    
    @ManyToOne(() => Customer, (customer) => customer.users)
    user_customer = Customer;

}