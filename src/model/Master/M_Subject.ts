import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Activity } from "./M_Activity";
import { Class } from "./M_Class";
import { Chapter } from "./M_Chapter";
import { Base } from "../Base";

@Entity("m_subject")
export class Subject extends Base {
  @Column()
  subject_name?: string;

  @ManyToOne(() => Class, (classes: any) => classes.subject)
  @JoinColumn({ name: "class_id" })
  classes?: Class;

  @OneToMany(() => Chapter, (chapter: any) => chapter.subject)
  chapter?: Chapter[];
  @OneToMany(() => Activity, (activity: any) => activity.subject)
  activity?: Activity[];
}
