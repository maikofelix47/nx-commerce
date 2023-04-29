import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Generated,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { SubCategory } from '../sub-category/sub-category.entity';
import { Media } from '../media/media.entity';
import { OrderDetails } from '../order-details/order-details.entity';
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  subCategoryId: number;

  @Column()
  inStock: number;

  @Column()
  productImg: string;

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

  @ManyToOne(() => SubCategory, (subCategory) => subCategory.products)
  subCategory: SubCategory;

  @OneToMany(()=> Media, (media)=> media.product)
  media: Media[];

  @OneToMany(()=> OrderDetails, (orderDetails)=> orderDetails.product)
  orderDetails: OrderDetails[];
}
