import { Entity, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Activity } from "./M_Activity";
import { Subject } from "./M_Subject";
import { Topic } from "./M_Topic";
import { Base } from "../Base";

@Entity("m_chapter")
export class Chapter extends Base {
  @Column()
  chapter_name?: string;
  @Column()
  category_name?: string;
  @Column()
  subject_id?: string;

  @ManyToOne(() => Subject, (subject: any) => subject.chapter)
  @JoinColumn({ name: "subject_id" })
  subject = Subject;

  @OneToMany(() => Topic, (topic: any) => topic.chapter)
  topic?: Topic[];
  @OneToMany(() => Activity, (activity: any) => activity.chapter)
  activity?: Activity[];
}
