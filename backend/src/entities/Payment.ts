import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Order } from "./Order";

@Entity("payments")
export class Payment {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => Order)
  @JoinColumn()
  order!: Order;

  @Column("decimal", { precision: 10, scale: 2 })
  amount!: number;

  @Column("varchar")
  paymentMethod!: string;

  @Column({ default: "pending" })
  paymentStatus!: string;

  @Column("varchar",{ unique: true })
  transactionId!: string;

  @Column({ nullable: true })
  paidAt!: Date;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}