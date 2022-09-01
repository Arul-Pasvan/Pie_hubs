import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Base } from "../Base";
import { Activity } from "./M_Activity";
import { U_Goal } from "../User/U_Goal";
import { Class } from "./M_Class";
import { Team } from "./M_Team";

@Entity("m_goal")
export class M_Goal extends Base {
  @Column()
  goal_name?: string;
  @Column()
  week_id?: number;
  @Column()
  winning_team_id?: number;
  @Column({ default: true })
  status?: boolean;

  @ManyToOne(() => Class, (classes: any) => classes.activity)
  @JoinColumn({ name: "class_id" })
  classes?: Class;
  @ManyToOne(() => Activity, (activity: any) => activity.goal)
  @JoinColumn({ name: "activity_id" })
  activity?: Activity;
  @ManyToOne(() => Team, (team: any) => team.goal)
  @JoinColumn({ name: "winning_team_id" })
  team?: Team;

  @OneToMany(() => U_Goal, (u_goal: any) => u_goal.goal)
  u_goal?: U_Goal[];
}
