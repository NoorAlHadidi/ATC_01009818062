import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity("Events")
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("text")
  description: string;

  @Column()
  category: string;

  @Column("datetime")
  date: Date;

  @Column()
  venue: string;

  @Column("decimal", { precision: 5, scale: 2 })
  price: number;

  @Column({ nullable: true })
  image: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;
}
