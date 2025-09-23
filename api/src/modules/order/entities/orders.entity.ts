import { UsersEntity } from "../../user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

enum Status {
  pending = "pending",
  delivered = "delivered",
  canceled = "canceled"
};

@Entity("orders")
export class OrdersEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "user_id", type: "uuid" })
  userId: string;
  
  @Column({ name: "order_date", type: "date" })
  orderDate: Date;

  @Column({ name: "status", type: "enum", enum: Status })
  status: Status;

  @Column({ name: "address", type: "varchar", length: 128 })
  address: string;

  @Column({ name: "total_amount", type: "integer" })
  totalAmount: number;

  @ManyToOne(() => UsersEntity, (user) => user.orders)
  @JoinColumn({ name: "user_id" })
  user: UsersEntity;
}