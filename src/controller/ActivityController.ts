import { Request, Response } from "express";
import { U_Goal } from "../model/User/U_Goal";
import { U_Activity } from "../model/User/U_Activity";
import { TeamMember } from "../model/Activity/T_Team_Members";
import { A_Social } from "../model/Activity/A_Social";
import { A_Social_Like } from "../model/Activity/A_Social_Like";
import { A_Social_View } from "../model/Activity/A_Social_View";
import { TransactionType } from "../interface/enum";
import {
  getUser,
  getGoal,
  getActivity,
  getTeam,
  getSocialLike,
  getSocial,
  deleteLike,
} from "../services/UserService";

export default {
  u_goal_post: async (req: Request, res: Response) => {
    try {
      const { user_id } = req.params;
      const { goal_id, activity_id, atoms_scored } = req.body;
      const user = await getUser(user_id);
      const goal = await getGoal(goal_id);
      const activity = await getActivity(activity_id);
      if (!user || !goal || !activity) {
        res
          .status(404)
          .json({ success: false, msg: "user or goal or activity not found" });
      } else {
        const u_goal = U_Goal.create({
          user,
          activity,
          goal,
          atoms_scored,
        });
        await u_goal.save();
        res
          .status(201)
          .json({ success: true, msg: "User goal added successfully" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },
  u_goal_get: async (req: Request, res: Response) => {
    try {
      const { user_id } = req.params;
      const user = await getUser(user_id);
      const user_goal = await U_Goal.find();
      if (!user || !user_goal) {
        res
          .status(404)
          .json({ success: false, msg: "user or user goal not found" });
      } else {
        res.status(200).json({ success: true, user_goal });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },

  u_activity_post: async (req: Request, res: Response) => {
    try {
      const { user_id } = req.params;
      const { activity_id, video_url, atoms_scored, comments } = req.body;
      const user = await getUser(user_id);
      const activity = await getActivity(activity_id);
      if (!user || !activity) {
        res
          .status(404)
          .json({ suceess: false, msg: "user or activity not found" });
      } else {
        const u_activity = U_Activity.create({
          user,
          video_url,
          atoms_scored,
          comments,
          activity,
        });
        await u_activity.save();
        res
          .status(201)
          .json({ success: true, msg: "user activity added successfully" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },
  u_activity_get: async (req: Request, res: Response) => {
    try {
      const { user_id } = req.params;
      const user = await getUser(user_id);
      const user_activity = await U_Activity.find();
      if (!user || !user_activity) {
        res
          .status(404)
          .json({ suceess: false, msg: "user or user activity not found" });
      } else {
        res.status(200).json({ success: true, user_activity });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },

  team_member_post: async (req: Request, res: Response) => {
    try {
      const { team_id } = req.params;
      const team = await getTeam(team_id);
      const { user_id } = req.body;
      const user = await getUser(user_id);
      if (!team || !user) {
        res.status(404).json({ suceess: false, msg: "user or team not found" });
      } else {
        const t_member = TeamMember.create({ team, user });
        await t_member.save();
        res
          .status(201)
          .json({ success: true, msg: "team member added successfully" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },
  team_member_get: async (req: Request, res: Response) => {
    try {
      const { team_id } = req.params;
      const team = await getTeam(team_id);
      const team_members = await TeamMember.find();
      if (!team || !team_members) {
        res
          .status(404)
          .json({ suceess: false, msg: "team or team members not found" });
      } else {
        res.status(200).json({ success: true, team_members });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },

  social_post: async (req: Request, res: Response) => {
    try {
      const { activity_id } = req.params;
      const { user_id, video_url, atoms_scored } = req.body;
      const activity = await getActivity(activity_id);
      const user = await getUser(user_id);
      if (!activity || !user) {
        res
          .status(404)
          .json({ suceess: false, msg: "user or activity not found" });
      } else {
        const social = A_Social.create({
          activity,
          user,
          video_url,
          atoms_scored,
        });
        await social.save();
        res
          .status(201)
          .json({ success: true, msg: "social activity added successfully" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },
  social_get: async (req: Request, res: Response) => {
    try {
      const { activity_id } = req.params;
      const activity = await getActivity(activity_id);
      const social_activity = await A_Social.find();
      if (!activity || !social_activity) {
        res.status(404).json({
          suceess: false,
          msg: "activity or social activity not found",
        });
      } else {
        res.status(200).json({ success: true, social_activity });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },

  social_like_post: async (req: Request, res: Response) => {
    try {
      const { social_activity_id } = req.params;
      const { user_id, type } = req.body;
      const social = await getSocial(social_activity_id);
      const user = await getUser(user_id);
      if (!user || !social) {
        res
          .status(404)
          .json({ suceess: false, msg: "user or social activity not found" });
      } else if (social.like) {
        if (type === TransactionType.LIKE) {
          const social_like_data = await getSocialLike(
            user_id,
            social_activity_id
          );
          if (social_like_data.length > 0) {
            res.status(400).json({ success: false, msg: "already liked" });
          } else {
            const social_like = A_Social_Like.create({ user, social });
            await social_like.save();
            social.like = 1 + parseInt(social.like.toString());
            res.status(201).json({
              success: true,
              msg: "social activity liked successfully",
            });
          }
        } else if (type === TransactionType.UNLIKE) {
          await deleteLike(user_id, social_activity_id);
          social.like = 1 - parseInt(social.like.toString());
          res.status(201).json({
            success: true,
            msg: "social activity unliked successfully",
          });
        }
        await social.save();
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },
  social_like_get: async (req: Request, res: Response) => {
    try {
      const { social_activity_id } = req.params;
      const social = await getSocial(social_activity_id);
      const social_like = await A_Social_Like.find();
      if (!social || !social_like) {
        res.status(404).json({
          suceess: false,
          msg: "social activity not found or no likes for this activity",
        });
      } else {
        res.status(200).json({ success: true, social_like });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },

  social_view_post: async (req: Request, res: Response) => {
    try {
      const { social_activity_id } = req.params;
      const { user_id } = req.body;
      const user = await getUser(user_id);
      const social = await getSocial(social_activity_id);
      if (!social || !user) {
        res
          .status(404)
          .json({ suceess: false, msg: "user or social activity not found" });
      } else {
        const social_view = A_Social_View.create({ user, social });
        await social_view.save();
        if (social.view) {
          social.view = 1 + parseInt(social.view.toString());
          await social.save();
          res.status(201).json({ success: true, msg: "activity viewed" });
        }
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },
  social_view_get: async (req: Request, res: Response) => {
    try {
      const { social_activity_id } = req.params;
      const social = await getSocial(social_activity_id);
      const social_view = await A_Social_View.find();
      if (!social || !social_view) {
        res.status(404).json({
          suceess: false,
          msg: "social activity not found or no views for this post",
        });
      } else {
        res.status(200).json({ success: true, social_view });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },
};
