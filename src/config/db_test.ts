import { createConnection } from "typeorm";
import { User } from "../model/Auth/M_User";
import { Student } from "../model/Auth/M_Student";
import { Class } from "../model/Master/M_Class";
import { Subject } from "../model/Master/M_Subject";
import { Chapter } from "../model/Master/M_Chapter";
import { Topic } from "../model/Master/M_Topic";
import { SubTopic } from "../model/Master/M_SubTopic";
import { Activity } from "../model/Master/M_Activity";
import { A_Social } from "../model/Activity/A_Social";
import { A_Social_Like } from "../model/Activity/A_Social_Like";
import { A_Social_View } from "../model/Activity/A_Social_View";
import { M_Goal } from "../model/Master/M_Goal";
import { U_Activity } from "../model/User/U_Activity";
import { U_Goal } from "../model/User/U_Goal";
import { Team } from "../model/Master/M_Team";
import { TeamMember } from "../model/Activity/T_Team_Members";

export default async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "123",
      database: "pie_hub",
      entities: [
        User,
        Student,
        Class,
        Subject,
        Chapter,
        Topic,
        SubTopic,
        Activity,
        A_Social,
        A_Social_Like,
        A_Social_View,
        M_Goal,
        U_Activity,
        U_Goal,
        Team,
        TeamMember,
      ],
      synchronize: true,
    });

    console.log("connected to postgres");
  } catch (err) {
    console.log("Unable to connect \n", err);
  }
};
