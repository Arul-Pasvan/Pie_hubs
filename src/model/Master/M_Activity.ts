import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Base } from "../Base";
import { Chapter } from "./M_Chapter";
import { Class } from "./M_Class";
import { Subject } from "./M_Subject";
import { User } from "../Auth/M_User";
import { U_Activity } from "../User/U_Activity";
import { U_Goal } from "../User/U_Goal";
import { A_Social } from "../Activity/A_Social";
import { M_Goal } from "./M_Goal";

@Entity("m_activity")
export class Activity extends Base {
  @Column()
  activity_name?: string;
  @Column()
  atoms?: number;
  @Column()
  url?: string;
  @Column({ default: true })
  status?: boolean;

  @ManyToOne(() => Class, (classes: any) => classes.activity)
  @JoinColumn({ name: "class_id" })
  classes?: Class;
  @ManyToOne(() => Subject, (subject: any) => subject.activity)
  @JoinColumn({ name: "subject_id" })
  subject?: Subject;
  @ManyToOne(() => Chapter, (chapter: any) => chapter.activity)
  @JoinColumn({ name: "chapter_id" })
  chapter?: Chapter;
  @ManyToOne(() => User, (user: any) => user.activity)
  @JoinColumn({ name: "created_by" })
  user?: User;

  @OneToMany(() => U_Goal, (u_goal: any) => u_goal.activity)
  u_goal?: U_Goal[];
  @OneToMany(() => U_Activity, (u_activity: any) => u_activity.activity)
  u_activity?: U_Activity[];
  @OneToMany(() => A_Social, (a_social: any) => a_social.activity)
  a_social?: A_Social[];
  @OneToMany(() => M_Goal, (m_goal: any) => m_goal.activity)
  m_goal?: M_Goal[];
}
