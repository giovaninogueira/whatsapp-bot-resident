import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

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
  phone: string;

  @Column({
    length: 20,
  })
  apartment: string;
}
