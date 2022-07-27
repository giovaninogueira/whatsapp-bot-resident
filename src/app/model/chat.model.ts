import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
} from "typeorm";
import { DeliveryModel } from "./delivery.model";

import { ResidentModel } from './resident.model'

@Entity({
    name: 'chat'
})
export class ChatModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: 'text'
    })
    message: string;

    @Column({
        type: 'text',
        nullable: true
    })
    response: string;

    @Column({
        default: false
    })
    waitResponse: boolean

    @ManyToOne(() => DeliveryModel, (delivery) => delivery.chats)
    delivery: DeliveryModel

    @ManyToOne(() => ResidentModel, (resident) => resident.chats)
    resident: ResidentModel

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
