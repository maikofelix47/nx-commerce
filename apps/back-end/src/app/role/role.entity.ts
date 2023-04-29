import { RolePermission } from '../role-permission/role-permission.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  @Generated('uuid')
  uuid: string;

  @Column()
  createdBy: number;

  @CreateDateColumn({ nullable: false })
  dateCreated: Date;

  @UpdateDateColumn({ nullable: true })
  dateUpdated: Date;

  @Column({ nullable: true })
  voided: boolean;

  @Column({ nullable: true, type: 'timestamp' })
  voidedDate: Date;

  @Column({ nullable: true })
  voidedBy: number;

  @Column({ nullable: true })
  voidedReason: string;

  @OneToMany(()=> RolePermission,(rolePermission)=> rolePermission.roles)
  rolePermissions: RolePermission[]
}
