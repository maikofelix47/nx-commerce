import { RolePermission } from '../role-permission/role-permission.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';


@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Generated('uuid')
  uuid: string;

  @Column()
  createdBy: number;

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @Column({ nullable: true })
  voided: boolean;

  @Column({ nullable: true })
  voidedBy: number;

  @Column({ nullable: true })
  voidedDate: Date;

  @Column({ nullable: true })
  voidedReason: string;

  @OneToMany(()=> RolePermission, (rolePermission)=> rolePermission.permissions)
  rolePermissions: RolePermission[]
}
