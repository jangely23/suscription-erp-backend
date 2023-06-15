import { Customer } from "src/customers/entities/customer.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Exclude } from "class-transformer";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;
    
    @Column({ type:'varchar', length: 100 })
    name: string;

    @Column({ type:'varchar', length: 20, unique: true })
    username: string;

    @Column({ type:'varchar', length: 100, unique: true })
    email: string;

    @Exclude()
    @Column({ type:'varchar', length: 255 })
    password: string;

    @Column({type:'enum', enum:['active','inactive','eliminate'], default:'active'})
    status:  string;

    @Column({type:'enum', enum:['superadmin','administrator','operator','support'], default:'administrator'})
    role:  string;

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
    
    @ManyToOne(() => Customer, (customer) => customer.users)
    @JoinColumn({name: 'customer_id'})
    userCustomer: Customer;

}