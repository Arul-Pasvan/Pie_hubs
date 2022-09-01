import { Entity, Column, OneToMany } from "typeorm";
import { Activity } from "./M_Activity";
import { M_Goal } from "./M_Goal";
import { Subject } from "./M_Subject";
import { Base } from "../Base";

@Entity("m_class")
export class Class extends Base {
  @Column({ unique: true })
  class_name?: String;

  @OneToMany(() => Subject, (subject: any) => subject.classes)
  subject?: Subject[];
  @OneToMany(() => Activity, (activity: any) => activity.classes)
  activity?: Activity[];
  @OneToMany(() => M_Goal, (m_goal: any) => m_goal.classes)
  m_goal?: M_Goal;
}
