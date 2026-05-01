import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";

import {User} from "./User";

@Entity("addresses")
 export class Address {
        @PrimaryGeneratedColumn()
        id!: number;

        @Column()
        name!:string;

        @Column()
        contact!:number;

        @Column()
        street!:string;

        @Column()
        city!:string;

        @Column()
        country!:string;

        @Column()
        pincode!:string;
        
        @CreateDateColumn()
        createdAt!:Date

        @UpdateDateColumn()
        updatedAt!:Date

        @ManyToOne(()=>User,(user)=>user.addresses)
        user!:User;
        
    }
