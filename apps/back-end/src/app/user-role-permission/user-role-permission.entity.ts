import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class UserRolePermission{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    createdBy: number;


}