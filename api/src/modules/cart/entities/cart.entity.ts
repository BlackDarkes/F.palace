import { ProductsEntity } from "../../product/entities/product.entity";
import { UsersEntity } from "../../user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("cart")
export class CartEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "user_id", type: "uuid" })
  userId: string;

  @Column({ name: "product_id", type: "uuid" })
  productId: string;

  @Column({ name: "quantity", type: "numeric" })
  quantity: number;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @ManyToOne(() => UsersEntity, (user) => user.carts)
  @JoinColumn({ name: "user_id" })
  user: UsersEntity;

  @ManyToOne(() => ProductsEntity)
  @JoinColumn({ name: "product_id" })
  product: ProductsEntity;
}
