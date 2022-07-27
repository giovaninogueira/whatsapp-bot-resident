import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    BaseEntity, 
    CreateDateColumn, 
    UpdateDateColumn, 
    OneToMany 
} from "typeorm";
import { DeliveryModel } from "./delivery.model";
import { ResidentModel } from "./resident.model";

@Entity({
    name: 'house'
})
export class HouseModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    street: string;

    @Column()
    number: string;

    @Column()
    zipCode: string;

    @Column({
        nullable: true
    })
    complement: string;

    @OneToMany(() => DeliveryModel, (delivery) => delivery.house)
    deliveries: DeliveryModel[]

    @OneToMany(() => ResidentModel, (resident) => resident.house)
    residents: ResidentModel[]

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
