import { PrimaryGeneratedColumn, Column } from 'typeorm';

export class customer {
    @PrimaryGeneratedColumn()
    customer_type_id: number;

    @Column({ type:'int' })
    customer_type: number;
}
