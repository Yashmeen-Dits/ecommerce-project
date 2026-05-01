import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Address } from "../entities/Address"
import { Product } from "../entities/Product";
import { Category } from "../entities/Category";
import { OrderItem } from "../entities/OrderItem";
import { OrderTracking } from "../entities/OrderTracking";
import { Payment } from "../entities/Payment";
import { Cart } from "../entities/Cart";
import { CartItem } from "../entities/CartItem";
import { Order } from "../entities/Order";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "ecommerce_db",

  synchronize: true,

  logging: false,

  entities: [User,Address,Product,Order,Category,Payment,OrderItem,OrderTracking,Cart,CartItem],
  migrations: ["src/migrations/*.ts"],
  subscribers: [],
});