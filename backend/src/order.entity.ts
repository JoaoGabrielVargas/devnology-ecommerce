import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('simple-json')
    products: any[];

    @Column()
    total: number;

    @Column()
    customerName: string;

    @Column()
    customerEmail: string;

    @Column()
    customerAddress: string;

    @Column({type: 'datetime', default: ()=> 'CURRENT_TIMESTAMP'})
    createdAt: Date;
}