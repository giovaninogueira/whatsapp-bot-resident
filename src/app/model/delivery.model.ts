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

@Entity({
    name: 'delivery'
})
export class DeliveryModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    codePackage: string;

    @Column({
        default: false
    })
    delivered: boolean

    @Column({
        default: false
    })
    deliverInHome: boolean;

    @Column({
        type: 'datetime'
    })
    dateDelivered: Date

    @ManyToOne(() => HouseModel, (house) => house.deliveries)
    house: HouseModel

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
