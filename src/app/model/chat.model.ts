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

@Entity()
export class ChatModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: 'text'
    })
    message: string;

    @Column({
        type: 'text'
    })
    response: string;

    @Column()
    chatId: string;

    @Column()
    waitResponse: boolean

    @ManyToOne(() => ResidentModel, (resident) => resident.chats)
    resident: ResidentModel

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
