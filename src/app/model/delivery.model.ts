import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
} from "typeorm";

import { HouseModel } from './house.model'

@Entity()
export class DeliveryModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    codePackage: string;

    @Column()
    delivered: boolean

    @Column()
    deliverInHome: boolean;

    @Column({
        type: 'date'
    })
    dateDelivered: Date

    @ManyToOne(() => HouseModel, (house) => house.deliveries)
    house: HouseModel

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
