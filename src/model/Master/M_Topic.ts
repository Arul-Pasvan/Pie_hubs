import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";

import { Chapter } from "./M_Chapter";
import { SubTopic } from "./M_SubTopic";
import { Base } from "../Base";

@Entity("m_topic")
export class Topic extends Base {
  @Column()
  topic_name?: string;

  @ManyToOne(() => Chapter, (chapter: any) => chapter.topic)
  @JoinColumn({ name: "chapter_id" })
  chapter?: Chapter;

  @OneToMany(() => SubTopic, (subTopic: any) => subTopic.topic)
  subTopic?: SubTopic[];
}
