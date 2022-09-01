import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { Activity } from "../Master/M_Activity";
import { M_Goal } from "../Master/M_Goal";
import { User } from "../Auth/M_User";
import { Base } from "../Base";

@Entity("u_goal")
export class U_Goal extends Base {
  @Column()
  atoms_scored?: number;
  @Column({ default: true })
  status?: boolean;

  @ManyToOne(() => User, (user: any) => user.goal)
  @JoinColumn({ name: "user_id" })
  user?: User;
  @ManyToOne(() => M_Goal, (goal: any) => goal.u_goal)
  @JoinColumn({ name: "goal_id" })
  goal?: M_Goal;
  @ManyToOne(() => Activity, (activity: any) => activity.goal)
  @JoinColumn({ name: "activity_id" })
  activity?: Activity;
}
