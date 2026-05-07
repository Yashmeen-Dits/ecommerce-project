import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from "typeorm";

import {Address} from "./Address";
import { Product } from "./Product";
import { Cart } from "./Cart";
import { Order } from "./Order";


export enum role {
  ADMIN="admin",
  CUSTOMER="customer",
  SELLER="seller"
}

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar", { length: 20 })
  firstName!: string;

  @Column("varchar",{length:20})
  lastName!: string;

  @Column("varchar")
  username!:string;

  @Column("varchar",{ unique: true })
  email!: string;

  @Column("varchar")
  password!: string;

  @Column({ 
    type:"enum",
    enum : role,
    default:role.CUSTOMER,
  })
  role!: role;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToMany(()=>Address,(address)=>address.user)
  addresses!: Address[];

  @OneToMany(()=>Product,(product)=>product.user)
  product!: Product[];

  @OneToMany(()=>Cart,(cart)=>cart.user)
  cart!: Cart[];

  @OneToMany(()=>Order,(order)=>order.user)
  order!: Order[];



}