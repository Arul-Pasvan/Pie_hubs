import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "../Auth/M_User";
import { TeamMember } from "../Activity/T_Team_Members";
import { Base } from "../Base";
import { M_Goal } from "./M_Goal";

@Entity("m_team")
export class Team extends Base {
  @Column()
  team_name?: string;
  @Column()
  team_pic?: string;
  @Column()
  team_atoms?: number;
  @Column({ default: true })
  status?: boolean;

  @ManyToOne(() => User, (user: any) => user.goal)
  @JoinColumn({ name: "user_id" })
  user?: User;

  @OneToMany(() => TeamMember, (team_member: any) => team_member.team)
  team_member?: TeamMember[];
  @OneToMany(() => M_Goal, (goal: any) => goal.team)
  goal?: M_Goal[];
}
