"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MasterController_1 = __importDefault(require("../controller/MasterController"));
const Dashboard = (0, express_1.Router)();
Dashboard.get("/class", MasterController_1.default.class_get);
Dashboard.post("/class", MasterController_1.default.class_post);
Dashboard.get("/class/:class_id/subject", MasterController_1.default.subject_get);
Dashboard.post("/class/:class_id/subject", MasterController_1.default.subject_post);
Dashboard.get("/subject", MasterController_1.default.subject_read);
Dashboard.get("/subject/:subject_id/chapter", MasterController_1.default.chapter_get);
Dashboard.post("/subject/:subject_id/chapter", MasterController_1.default.chapter_post);
Dashboard.get("/category", MasterController_1.default.chapter_category);
Dashboard.get("/chapter", MasterController_1.default.chapter_read);
Dashboard.get("/chapter/:chapter_id/topic", MasterController_1.default.topic_get);
Dashboard.post("/chapter/:chapter_id/topic", MasterController_1.default.topic_post);
Dashboard.get("/topic", MasterController_1.default.topic_read);
Dashboard.get("/topic/:topic_id/subtopic", MasterController_1.default.subtopic_get);
Dashboard.post("/topic/:topic_id/subtopic", MasterController_1.default.subtopic_post);
Dashboard.get("/subtopic", MasterController_1.default.subject_read);
Dashboard.post("/user/:user_id/activity", MasterController_1.default.activity_post);
Dashboard.get("/user/:user_id/activity", MasterController_1.default.activity_read);
Dashboard.get("/goal", MasterController_1.default.goal_get);
Dashboard.post("/goal", MasterController_1.default.goal_post);
exports.default = Dashboard;
//# sourceMappingURL=MasterRoute.js.map