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

enum TrackingStatus {
 PROCESSING="processing",
 PACKED="packed",
 SHIPPED="shipped",
 DELIVERED="delivered"
}

@Entity("order_trackings")
export class OrderTracking {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => Order)
  @JoinColumn()
  order!: Order;

  @Column({ type:"enum"
     ,enum:TrackingStatus, 
     default: "processing" })
     trackingStatus!: TrackingStatus;

  @Column({ nullable: true })
  courierName!: string;

  @Column({ nullable: true, unique: true })
  trackingNumber!: string;

  @Column({ nullable: true })
  estimatedDelivery!: Date;

  @Column({ nullable: true })
  deliveredAt!: Date;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}