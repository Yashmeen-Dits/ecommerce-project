import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Category } from "./Category";
import { User } from "./User";
import { Cart } from "./Cart";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar")
  name!: string;

  @Column("text")
  description!: string;

  @Column("decimal")
  price!: number;

  @Column()
  stock!: number;

  @Column()
  brand!: string;

  @Column()
  imageUrl!: string;

  @Column({ default: true })
  isActive!: boolean;

  @ManyToOne(() => Category)
  category!: Category;

  @ManyToOne(() => User)
  user!: User;

  @ManyToOne(() => Cart)
  cart!: Cart;


  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

}