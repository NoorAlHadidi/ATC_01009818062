import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Unique,
  CreateDateColumn,
} from "typeorm";
import { User } from "../auth/user.entity";
import { Event } from "../events/event.entity";

@Entity("Bookings")
@Unique(["user", "event"])
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { onDelete: "CASCADE", onUpdate: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne(() => Event, { onDelete: "CASCADE", onUpdate: "CASCADE" })
  @JoinColumn({ name: "event_id" })
  event: Event;

  @CreateDateColumn({ name: "booked_at" })
  bookedAt: Date;
}
