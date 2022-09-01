import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { Topic } from "./M_Topic";
import { Base } from "../Base";

@Entity("m_subtopic")
export class SubTopic extends Base {
  @Column()
  subtopic_name?: string;
  @Column()
  url?: string;

  @ManyToOne(() => Topic, (topic: any) => topic.subTopic)
  @JoinColumn({ name: "topic_id" })
  topic?: Topic;
}
