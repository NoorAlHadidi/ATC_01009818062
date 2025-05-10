import { Entity, Column, OneToOne, JoinColumn, PrimaryColumn } from "typeorm";
import { User } from "../auth/user.entity";

@Entity("Profiles")
export class Profile {
  @PrimaryColumn()
  id: number;

  @OneToOne(() => User, { onDelete: "CASCADE", onUpdate: "CASCADE" })
  @JoinColumn({ name: "id" })
  user: User;

  @Column({ name: "first_name", nullable: false })
  firstName: string;

  @Column({ name: "last_name", nullable: false })
  lastName: string;

  @Column({ name: "phoneNumber", nullable: true, unique: true })
  phone_number: string;

  @Column({ name: "profilePicture", nullable: true })
  profile_picture: string;
}
