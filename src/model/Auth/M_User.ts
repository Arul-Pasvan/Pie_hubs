import { Entity, Column, OneToMany } from "typeorm";
import { Base } from "../Base";
import { A_Social } from "../Activity/A_Social";
import { A_Social_Like } from "../Activity/A_Social_Like";
import { A_Social_View } from "../Activity/A_Social_View";
import { Activity } from "../Master/M_Activity";
import { Team } from "../Master/M_Team";
import { U_Activity } from "../User/U_Activity";
import { U_Goal } from "../User/U_Goal";
import { TeamMember } from "../Activity/T_Team_Members";

@Entity("m_user")
export class User extends Base {
  @Column({ unique: true })
  email?: string;
  @Column()
  password?: string;
  @Column()
  otp?: number;
  @Column({ default: false, name: "email_verified" })
  email_verified?: boolean;
  @Column({ nullable: true })
  user_role?: string;
  @Column({ default: true, name: "active" })
  is_active?: boolean;
  @Column("text", { nullable: true })
  token?: string;

  @OneToMany(() => Activity, (activity: any) => activity.user)
  activity?: Activity[];
  @OneToMany(() => U_Goal, (u_goal: any) => u_goal.user)
  u_goal?: U_Goal[];
  @OneToMany(() => U_Activity, (u_activity: any) => u_activity.user)
  u_activity?: U_Activity[];
  @OneToMany(() => Team, (team: any) => team.user)
  team?: Team[];
  @OneToMany(() => TeamMember, (team_member: any) => team_member.user)
  team_member?: TeamMember;
  @OneToMany(() => A_Social, (social: any) => social.user)
  social?: A_Social[];
  @OneToMany(() => A_Social_Like, (social_like: any) => social_like.user)
  social_like?: A_Social_Like[];
  @OneToMany(() => A_Social_View, (social_view: any) => social_view.user)
  social_view?: A_Social_View[];
}
