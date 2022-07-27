import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
} from "typeorm";

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

    @Column()
    chatId: string;

    @Column({
        default: false
    })
    waitResponse: boolean

    @ManyToOne(() => ResidentModel, (resident) => resident.chats)
    resident: ResidentModel

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
