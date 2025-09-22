import { CartEntity } from "src/modules/cart/entities/cart.entity";
import { FeedbackEntity } from "src/modules/feedback/entities/feedback.entity";
import { OrdersEntity } from "src/modules/order/entities/orders.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("users") 
export class UsersEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "name", type: "varchar", length: 20 })
  name: string;

  @Column({ name: "email", type: "varchar", length: 80, unique: true })
  email: string;

  @Column({ name: "password", type: "varchar", length: 80 })
  password: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @OneToMany(() => FeedbackEntity, (feedback) => feedback.user, { cascade: true })
  feedbacks: FeedbackEntity[];

  @OneToMany(() => OrdersEntity, (order) => order.user, { cascade: true })
  orders: OrdersEntity[];

  @OneToMany(() => CartEntity, (cart) => cart.user, { cascade: true })
  carts: CartEntity[];
}