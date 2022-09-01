"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ActivityController_1 = __importDefault(require("src/controller/ActivityController"));
const Activity = (0, express_1.Router)();
Activity.post("/user/:user_id/goal", ActivityController_1.default.u_goal_post);
Activity.get("/user/:user_id/goal", ActivityController_1.default.u_goal_get);
Activity.post("/user/:user_id/activity", ActivityController_1.default.u_activity_post);
Activity.get("/user/:user_id/activity", ActivityController_1.default.u_activity_get);
Activity.post("/master/team", ActivityController_1.default.team_post);
Activity.get("/master/team", ActivityController_1.default.team_get);
Activity.post("/team/:team_id/team_members", ActivityController_1.default.team_member_post);
Activity.get("/team/:team_id/team_members", ActivityController_1.default.team_member_get);
Activity.post("/activity/:activity_id/social", ActivityController_1.default.social_post);
Activity.get("/activity/:activity_id/social", ActivityController_1.default.social_get);
Activity.post("/social/:social_activity_id/like", ActivityController_1.default.social_like_post);
Activity.get("/social/:social_activity_id/like", ActivityController_1.default.social_like_get);
Activity.post("/social/:social_activity_id/view", ActivityController_1.default.social_view_post);
Activity.get("/social/:social_activity_id/view", ActivityController_1.default.social_view_get);
exports.default = Activity;
//# sourceMappingURL=ActivityRoute.js.map