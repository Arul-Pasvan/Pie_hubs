"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const M_User_1 = require("../model/Auth/M_User");
const M_Activity_1 = require("../model/Master/M_Activity");
const U_Goal_1 = require("../model/User/U_Goal");
const U_Activity_1 = require("../model/User/U_Activity");
const T_Team_1 = require("../model/T_Team");
const T_Team_Members_1 = require("../model/T_Team_Members");
const A_Social_1 = require("../model/Activity/A_Social");
const A_Social_Like_1 = require("../model/Activity/A_Social_Like");
const A_Social_View_1 = require("../model/Activity/A_Social_View");
const M_Goal_1 = require("../model/Master/M_Goal");
exports.default = {
    u_goal_post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { user_id } = req.params;
            const { goal_id, activity_id, atoms_scored } = req.body;
            const user = yield M_User_1.User.findOneById(user_id);
            if (!user) {
                res.status(404).json({ success: false, msg: "user not found" });
            }
            else {
                const goal = yield M_Goal_1.M_Goal.findOneById(goal_id);
                const activity = yield M_Activity_1.Activity.findOneById(activity_id);
                if (!goal || !activity) {
                    res
                        .status(404)
                        .json({ success: false, msg: "goal or activity not found" });
                }
                else {
                    const u_goal = U_Goal_1.U_Goal.create({
                        user,
                        activity,
                        goal,
                        atoms_scored,
                    });
                    yield u_goal.save();
                    res
                        .status(201)
                        .json({ success: true, msg: "User goal added successfully" });
                }
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    u_goal_get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { user_id } = req.params;
            const user = yield M_User_1.User.findOneById(user_id);
            if (!user) {
                res.status(404).json({ success: false, msg: "user not found" });
            }
            else {
                const user_goal = yield U_Goal_1.U_Goal.find();
                if (!user_goal) {
                    res.status(404).json({ success: false, msg: "user goal not found" });
                }
                else {
                    res.status(200).json({ success: true, user_goal });
                }
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    u_activity_post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { user_id } = req.params;
            const { activity_id, video_url, atoms_scored, comments } = req.body;
            const user = yield M_User_1.User.findOneById(user_id);
            if (!user) {
                res.status(404).json({ suceess: false, msg: "user not found" });
            }
            else {
                const activity = yield M_Activity_1.Activity.findOneById(activity_id);
                if (!activity) {
                    res.status(404).json({ suceess: false, msg: "activity not found" });
                }
                else {
                    const u_activity = U_Activity_1.U_Activity.create({
                        user,
                        video_url,
                        atoms_scored,
                        comments,
                        activity,
                    });
                    yield u_activity.save();
                    res
                        .status(201)
                        .json({ success: true, msg: "user activity added successfully" });
                }
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    u_activity_get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { user_id } = req.params;
            const user = yield M_User_1.User.findOneById(user_id);
            if (!user) {
                res.status(404).json({ suceess: false, msg: "user not found" });
            }
            else {
                const user_activity = yield U_Activity_1.U_Activity.find();
                if (!user_activity) {
                    res
                        .status(404)
                        .json({ suceess: false, msg: "user activity not found" });
                }
                else {
                    res.status(200).json({ success: true, user_activity });
                }
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    team_post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { user_id, team_name, team_pic, team_atoms } = req.body;
            const user = yield M_User_1.User.findOneById(user_id);
            if (!user) {
                res.status(404).json({ suceess: false, msg: "user not found" });
            }
            else {
                const team = T_Team_1.Team.create({ user, team_name, team_pic, team_atoms });
                yield team.save();
                res.status(201).json({ success: true, msg: "team added successfully" });
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    team_get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const teams = yield T_Team_1.Team.find();
            if (!teams) {
                res.status(404).json({ suceess: false, msg: "team not found" });
            }
            else {
                res.status(200).json({ success: true, teams });
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    team_member_post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { team_id } = req.params;
            const team = yield T_Team_1.Team.findOneById(team_id);
            if (!team) {
                res.status(404).json({ suceess: false, msg: "team not found" });
            }
            else {
                const { user_id } = req.params;
                const user = yield M_User_1.User.findOneById(user_id);
                if (!user) {
                    res.status(404).json({ suceess: false, msg: "user not found" });
                }
                else {
                    const t_member = T_Team_Members_1.TeamMember.create({ team, user });
                    yield t_member.save();
                    res
                        .status(201)
                        .json({ success: true, msg: "team member added successfully" });
                }
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    team_member_get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { team_id } = req.params;
            const team = yield T_Team_1.Team.findOneById(team_id);
            if (!team) {
                res.status(404).json({ suceess: false, msg: "team not found" });
            }
            else {
                const team_members = yield T_Team_Members_1.TeamMember.find();
                if (!team_members) {
                    res.status(404).json({
                        suceess: false,
                        msg: "team members not found for this team",
                    });
                }
                else {
                    res.status(200).json({ success: true, team_members });
                }
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    social_post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { activity_id } = req.params;
            const activity = yield M_Activity_1.Activity.findOneById(activity_id);
            if (!activity) {
                res.status(404).json({ suceess: false, msg: "activity not found" });
            }
            else {
                const { user_id, video_url, atoms_scored, view, like } = req.body;
                const user = yield M_User_1.User.findOneById(user_id);
                if (!user) {
                    res.status(404).json({ suceess: false, msg: "user not found" });
                }
                else {
                    const social = A_Social_1.A_Social.create({
                        activity,
                        user,
                        video_url,
                        view,
                        like,
                        atoms_scored,
                    });
                    yield social.save();
                    res
                        .status(201)
                        .json({ success: true, msg: "social activity added successfully" });
                }
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    social_get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { activity_id } = req.params;
            const activity = yield M_Activity_1.Activity.findOneById(activity_id);
            if (!activity) {
                res.status(404).json({ suceess: false, msg: "activity not found" });
            }
            else {
                const social_activity = yield A_Social_1.A_Social.find();
                if (!social_activity) {
                    res
                        .status(404)
                        .json({ suceess: false, msg: "social activity not found" });
                }
                else {
                    res.status(200).json({ success: true, social_activity });
                }
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    social_like_post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { social_activity_id } = req.params;
            const { user_id } = req.body;
            const social = yield A_Social_1.A_Social.findOneById(social_activity_id);
            const user = yield M_User_1.User.findOneById(user_id);
            if (!user || !social) {
                res
                    .status(404)
                    .json({ suceess: false, msg: "user or social activity not found" });
            }
            else {
                const social_like = A_Social_Like_1.A_Social_Like.create({ user, social });
                yield social_like.save();
                res.status(201).json({
                    success: true,
                    msg: "social activity added like successfully",
                });
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    social_like_get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { social_activity_id } = req.params;
            const social = yield A_Social_1.A_Social.findOneById(social_activity_id);
            if (!social) {
                res
                    .status(404)
                    .json({ suceess: false, msg: "social activity not found" });
            }
            else {
                const social_like = yield A_Social_Like_1.A_Social_Like.find();
                if (!social_like) {
                    res
                        .status(404)
                        .json({ suceess: false, msg: "no likes for this post" });
                }
                else {
                    res.status(200).json({ success: true, social_like });
                }
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    social_view_post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { social_activity_id } = req.params;
            const { user_id } = req.body;
            const user = yield M_User_1.User.findOneById(user_id);
            const social = yield A_Social_1.A_Social.findOneById(social_activity_id);
            if (!social || !user) {
                res
                    .status(404)
                    .json({ suceess: false, msg: "user or social activity not found" });
            }
            else {
                const social_view = A_Social_View_1.A_Social_View.create({ user, social });
                yield social_view.save();
                res.status(201).json({ success: true, msg: "activity viewed" });
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    social_view_get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { social_activity_id } = req.params;
            const social = yield A_Social_1.A_Social.findOneById(social_activity_id);
            if (!social) {
                res
                    .status(404)
                    .json({ suceess: false, msg: "social activity not found" });
            }
            else {
                const social_view = yield A_Social_View_1.A_Social_View.find();
                if (!social_view) {
                    res
                        .status(404)
                        .json({ suceess: false, msg: "no view for this activity" });
                }
                else {
                    res.status(200).json({ success: true, social_view });
                }
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
};
//# sourceMappingURL=ActivityController.js.map