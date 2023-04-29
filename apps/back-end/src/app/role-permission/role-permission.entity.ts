import { Permission } from "../permission/permission-entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Role } from "../role/role.entity";


@Entity()
export class RolePermission{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=> Role, (role: any)=> role)
    roles: Role

    @ManyToOne(()=> Permission, (permission: any)=> permission)
    permissions: Permission[];

    @Column()
    createdBy: number;

    @CreateDateColumn()
    dateCreated: Date;

    @UpdateDateColumn()
    dateUpdated: Date;

    @Column()
    voided: boolean;

    @Column({ nullable: true, type: 'timestamp' })
    voidedDate: Date;
  
    @Column({ nullable: true })
    voidedBy: number;
  
    @Column({ nullable: true })
    voidedReason: string;

}