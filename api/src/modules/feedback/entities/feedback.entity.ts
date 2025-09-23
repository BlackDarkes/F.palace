import { UsersEntity } from "../../user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("feedback")
export class FeedbackEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "user_id", type: "uuid" })
  userId: string;

  @Column({ name: "message", type: "text" })
  message: string;

  @ManyToOne(() => UsersEntity, (user) => user.feedbacks)
  @JoinColumn({ name: "user_id" })
  user: UsersEntity;
}