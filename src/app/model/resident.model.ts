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

@Entity()
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

  @Column()
  notify: boolean;

  @ManyToOne(() => HouseModel, (house) => house.residents)
  house: HouseModel

  @OneToMany(() => ChatModel, (chat) => chat.resident)
  chats: ChatModel[]

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
