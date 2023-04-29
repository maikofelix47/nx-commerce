import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Generated,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn
} from 'typeorm';

import { Customer } from '../customer/customer.entity';

@Entity()
export class CustomerDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fName: string;

  @Column()
  lName: string;

  @Column()
  mobileNo: string;

  @Column()
  county: string;

  @Column()
  city: string;

  @Column()
  estate: string;

  @Column()
  houseAddress: string;

  @Column()
  postalCode: string;

  @Column()
  @Generated('uuid')
  uuid: string;

  @Column({ nullable: true })
  voided: boolean;

  @Column({ nullable: true, type: 'timestamp' })
  voidedDate: Date;

  @Column({ nullable: true })
  voidedBy: number;

  @Column({ nullable: true })
  voidedReason: string;

  @Column()
  createdBy: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(()=> Customer)
  @JoinColumn()
  customer: Customer;
}
