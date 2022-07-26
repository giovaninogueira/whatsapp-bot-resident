import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { DeliveryModel } from "./delivery.model";
import { ResidentModel } from "./resident.model";

@Entity()
export class HouseModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    street: string;

    @Column()
    number: string;

    @Column()
    complement: string;

    @OneToMany(() => DeliveryModel, (delivery) => delivery.house)
    deliveries: DeliveryModel[]

    @OneToMany(() => ResidentModel, (resident) => resident.house)
    residents: ResidentModel[]

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
