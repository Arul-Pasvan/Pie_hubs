import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { A_Social } from "../Activity/A_Social";
import { Activity } from "../Master/M_Activity";
import { User } from "../Auth/M_User";
import { Base } from "../Base";

@Entity("u_activity")
export class U_Activity extends Base {
  @Column()
  comments?: string;
  @Column()
  atoms_scored?: number;
  @Column({ default: true })
  status?: boolean;
  @Column()
  video_url?: string;

  @ManyToOne(() => User, (user: any) => user.goal)
  @JoinColumn({ name: "user_id" })
  user?: User;
  @ManyToOne(() => Activity, (activity: any) => activity.u_activity)
  @JoinColumn({ name: "activity_id" })
  activity?: Activity;

  @OneToMany(() => A_Social, (social: any) => social.activity)
  social?: A_Social[];
}
