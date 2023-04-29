import { Media } from '../media/media.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Generated,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany
} from 'typeorm';
import { SubCategory } from '../sub-category/sub-category.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  @Generated('uuid')
  uuid: string;

  @Column({ nullable: true})
  voided: boolean;

  @Column({ nullable: true, type: 'timestamp' })
  voidedDate: Date;

  @Column({ nullable: true})
  voidedBy: number;

  @Column({ nullable: true})
  voidedReason: string;

  @Column()
  createdBy: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(()=> Media, (media)=> media.categories)
  media: Media;

  @OneToMany(()=> SubCategory,(subCategory)=> subCategory.category)
  subCategories: SubCategory[]

}
