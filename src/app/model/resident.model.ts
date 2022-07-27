import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne
} from "typeorm";

import { ChatModel } from "./chat.model";
import { HouseModel } from "./house.model";

@Entity({
  name: 'resident'
})
export class ResidentModel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 50,
  })
  name: string;

  @Column({
    length: 20,
    unique: true
  })
  cellphone: string;

  @Column({
    default: true
  })
  notify: boolean;

  @ManyToOne(() => HouseModel, (house) => house.residents)
  house: HouseModel

  @OneToMany(() => ChatModel, (chat) => chat.resident)
  chats: ChatModel[]

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
