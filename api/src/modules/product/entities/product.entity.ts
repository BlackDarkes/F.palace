import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
export class ProductsEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "name", type: "varchar", length: 50 })
  name: string;

  @Column({ name: "image", type: "varchar", length: 128 })
  image: string

  @Column({ name: "price", type: "numeric" })
  price: number;

  @Column({ name: "stars", type: "decimal", precision: 5, scale: 2 })
  stars: number;
}