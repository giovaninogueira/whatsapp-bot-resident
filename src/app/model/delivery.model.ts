import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    JoinColumn
} from "typeorm";
import { ChatModel } from "./chat.model";

import { HouseModel } from './house.model'
import { ResidentModel } from "./resident.model";

@Entity({
    name: 'delivery'
})
export class DeliveryModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    codePackage: string;

    @Column()
    length: number

    @Column({
        default: false
    })
    delivered: boolean

    @Column({
        default: false
    })
    deliverInHome: boolean;

    @Column({
        type: 'datetime',
        nullable: true
    })
    dateDelivered: Date

    @OneToMany(() => ChatModel, (chat) => chat.delivery)
    chats: ChatModel[]

    @ManyToOne(() => HouseModel, (house) => house.deliveries)
    house: HouseModel

    @OneToOne(() => ResidentModel)
    @JoinColumn()
    resident: ResidentModel

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
