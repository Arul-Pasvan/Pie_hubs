import { Router } from "express";
import Master from "../controller/MasterController";

const Dashboard = Router();

Dashboard.get("/class", Master.class_get);
Dashboard.post("/class", Master.class_post);
Dashboard.get("/class/:class_id/subject", Master.subject_get);
Dashboard.post("/class/:class_id/subject", Master.subject_post);
Dashboard.get("/subject", Master.subject_read);
Dashboard.get("/subject/:subject_id/chapter", Master.chapter_get);
Dashboard.post("/subject/:subject_id/chapter", Master.chapter_post);
Dashboard.get("/category", Master.chapter_category);
Dashboard.get("/chapter", Master.chapter_read);
Dashboard.get("/chapter/:chapter_id/topic", Master.topic_get);
Dashboard.post("/chapter/:chapter_id/topic", Master.topic_post);
Dashboard.get("/topic", Master.topic_read);
Dashboard.get("/topic/:topic_id/subtopic", Master.subtopic_get);
Dashboard.post("/topic/:topic_id/subtopic", Master.subtopic_post);
Dashboard.get("/subtopic", Master.subject_read);

Dashboard.post("/user/:user_id/activity", Master.activity_post);
Dashboard.get("/user/:user_id/activity", Master.activity_read);
Dashboard.get("/goal", Master.goal_get);
Dashboard.post("/goal", Master.goal_post);
Dashboard.get("/team", Master.team_get);
Dashboard.post("/team", Master.team_post);

export default Dashboard;
