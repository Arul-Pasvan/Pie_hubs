import { Entity, ManyToOne, JoinColumn } from "typeorm";
import { Base } from "../Base";
import { User } from "../Auth/M_User";
import { A_Social } from "./A_Social";

@Entity("a_social_like")
export class A_Social_Like extends Base {
  @ManyToOne(() => User, (user: any) => user.goal)
  @JoinColumn({ name: "user_id" })
  user?: User;

  @ManyToOne(() => A_Social, (social: any) => social.like)
  @JoinColumn({ name: "social_activity_id" })
  social?: A_Social;
}
