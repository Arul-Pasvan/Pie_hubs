import { Router } from "express";
import Act from "../controller/ActivityController";

const Activity = Router();

Activity.post("/user/:user_id/goal", Act.u_goal_post);
Activity.get("/user/:user_id/goal", Act.u_goal_get);
Activity.post("/user/:user_id/activity", Act.u_activity_post);
Activity.get("/user/:user_id/activity", Act.u_activity_get);
Activity.post("/team/:team_id/team_members", Act.team_member_post);
Activity.get("/team/:team_id/team_members", Act.team_member_get);
Activity.post("/activity/:activity_id/social", Act.social_post);
Activity.get("/activity/:activity_id/social", Act.social_get);
Activity.post("/social/:social_activity_id/like", Act.social_like_post);
Activity.get("/social/:social_activity_id/like", Act.social_like_get);
Activity.post("/social/:social_activity_id/view", Act.social_view_post);
Activity.get("/social/:social_activity_id/view", Act.social_view_get);

export default Activity;
