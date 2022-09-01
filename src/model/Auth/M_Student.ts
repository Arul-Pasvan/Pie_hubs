import { Entity, Column } from "typeorm";
import { Base } from "../Base";
@Entity("m_student")
export class Student extends Base {
  @Column()
  first_name?: string;
  @Column()
  last_name?: string;
  @Column({ type: "bigint" })
  mobile?: number;
  @Column()
  school_name?: string;
  @Column({ unique: true })
  user_id?: string;
}
