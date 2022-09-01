import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "../Auth/M_User";
import { Team } from "../Master/M_Team";
import { Base } from "../Base";

@Entity("team_members")
export class TeamMember extends Base {
  @Column({ default: true })
  status?: boolean;

  @ManyToOne(() => User, (user: any) => user.member)
  @JoinColumn({ name: "user_id" })
  user?: User;
  @ManyToOne(() => Team, (team: any) => team.member)
  @JoinColumn({ name: "team_id" })
  team?: Team;
}
