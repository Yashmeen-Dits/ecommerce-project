import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";
import { Address } from "./Address";
import { OrderItem } from "./OrderItem";
import { Payment } from "./Payment";

@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  orderNo!: string;


  @Column("decimal", { precision: 10, scale: 2 })
  totalAmount!: number;


  @Column({ default:"pending" })
  status!: string;


  @ManyToOne(() => User)
  user!: User;

  @ManyToOne(() => Address)
  shippingAddress!: Address;
  
  
  @OneToMany(()=>OrderItem,(orderitem)=>orderitem.order)
  orderitem!: OrderItem[];

  @OneToMany(()=>Payment,(payment)=>payment.order)
  payment!: Payment[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}