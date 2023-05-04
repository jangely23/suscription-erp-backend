import { PrimaryGeneratedColumn, Column } from 'typeorm';

export class Product {
    @PrimaryGeneratedColumn()
    product_id: number;

    @Column({ type:'int' })
    product_type_id: number;
    
    @Column({ type:'int' })
    company_id: number;

    @Column({ type:'varchar', length: 100 })
    name: string;

    @Column({ type:'varchar', length: 30 })
    reference: string;

    @Column({ type:'varchar', length: 30 })
    stocktacking_sku: string;

    @Column({ type:'int' })
    size: number;

    @Column({ type:'varchar', length: 30 })
    unit_of_measurement: string;

    @Column({ type:'text' })
    description: string;

    @Column({ type:'varchar', length: 30 })
    lote: string;

    @Column({ type:'int' })
    state: number;

    @Column({ type:'int' })
    quantity: number;

    @Column({ type:'float' })
    price: number;

    @Column({ type:'int' })
    sale: number;

    @Column({ type:'int' })
    iva: number;

    @Column({ type:'datetime' })
    creation_date: string;
}