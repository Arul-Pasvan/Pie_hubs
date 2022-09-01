import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Activity } from "../Master/M_Activity";
import { Base } from "../Base";
import { User } from "../Auth/M_User";
import { A_Social_Like } from "./A_Social_Like";
import { A_Social_View } from "./A_Social_View";

@Entity("a_social")
export class A_Social extends Base {
  @Column()
  video_url?: string;
  @Column({ type: "numeric", default: 0 })
  view?: number;
  @Column({ type: "numeric", default: 0 })
  like?: number;
  @Column()
  atoms_scored?: number;
  @Column({ default: true })
  status?: boolean;

  @ManyToOne(() => User, (user: any) => user.goal)
  @JoinColumn({ name: "user_id" })
  user?: User;
  @ManyToOne(() => Activity, (activity: any) => activity.goal)
  @JoinColumn({ name: "activity_id" })
  activity?: Activity;

  @OneToMany(() => A_Social_Like, (social_like: any) => social_like.social)
  social_like?: A_Social_Like[];
  @OneToMany(() => A_Social_View, (social_view: any) => social_view.social)
  social_view?: A_Social_View[];
}
