import { Request, Response } from "express";
import { Class } from "../model/Master/M_Class";
import { Subject } from "../model/Master/M_Subject";
import { Chapter } from "../model/Master/M_Chapter";
import { Topic } from "../model/Master/M_Topic";
import { SubTopic } from "../model/Master/M_SubTopic";
import { Activity } from "../model/Master/M_Activity";
import { M_Goal } from "../model/Master/M_Goal";
import { Team } from "../model/Master/M_Team";
import {
  getUser,
  getSubjects,
  getChapter,
  getChapters,
  getTopic,
  getSubtopic,
} from "../services/UserService";

export default {
  class_get: async (req: Request, res: Response) => {
    try {
      const stnds = await Class.find();
      res.status(200).json({ success: true, class: stnds });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },
  class_post: async (req: Request, res: Response) => {
    try {
      const stnds = Class.create({
        class_name: req.body.class_name,
      });
      await stnds.save();
      res.status(201).json({ success: true, msg: "Class added successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },

  subject_get: async (req: Request, res: Response) => {
    try {
      const { class_id } = req.params;
      const classId = await Class.findOneById(class_id);
      const subject = getSubjects(class_id);
      if (!classId || !subject) {
        res.status(404).json({
          success: false,
          msg: "Class not found or no subject for this class",
        });
      } else {
        res.status(200).json({ success: true, subject });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },
  subject_post: async (req: Request, res: Response) => {
    try {
      const { class_id } = req.params;
      const classes = await Class.findOneById(class_id);
      if (!classes) {
        res.status(404).json({ success: false, msg: "Class not found" });
      } else {
        const subject = Subject.create({
          subject_name: req.body.subject_name,
          classes,
        });
        await subject.save();
        res
          .status(201)
          .json({ success: true, msg: "Subject added Successfully" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },
  subject_read: async (req: Request, res: Response) => {
    try {
      const subject = await Subject.find();
      if (!subject) {
        res.status(404).json({ success: false, msg: "Subject not found" });
      } else {
        res.status(200).json({ success: true, subject });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },

  chapter_read: async (req: Request, res: Response) => {
    try {
      const chapter = await Chapter.find();
      if (!chapter) {
        res.status(404).json({ success: false, msg: "Chapter not found" });
      } else {
        res.status(200).json({ success: true, chapter });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },
  chapter_category: async (req: Request, res: Response) => {
    try {
      const chapter = getChapter();
      if (!chapter) {
        res.status(404).json({ success: false, msg: "no chapter found" });
      } else {
        res.status(200).send({ success: true, chapter });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },
  chapter_get: async (req: Request, res: Response) => {
    try {
      const { subject_id } = req.params;
      const subId = await Subject.findOneById(subject_id);
      const chapter = await getChapters(subject_id);
      if (!subId || !chapter) {
        res
          .status(404)
          .json({ success: false, msg: "Subject or chapter not found" });
      } else {
        res.status(200).json({ success: true, chapter });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },
  chapter_post: async (req: Request, res: Response) => {
    try {
      const { subject_id } = req.params;
      const { chapter_name, category_name } = req.body;
      const subject = await Subject.findOneById(subject_id);
      if (!subject) {
        res.status(404).json({ success: false, msg: "Subject not found" });
      } else {
        const chapter = Chapter.create({
          chapter_name,
          category_name,
          subject,
        });
        await chapter.save();
        res
          .status(201)
          .json({ success: true, msg: "Chapter added Successfully" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },

  topic_get: async (req: Request, res: Response) => {
    try {
      const { chapter_id } = req.params;
      const chapterId = await Chapter.findOneById(chapter_id);
      const topic = await getTopic(chapter_id);
      if (!chapterId || !topic) {
        res
          .status(404)
          .json({ success: false, msg: "Chapter or topic not found" });
      } else {
        res.status(200).json({ success: true, topic });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },
  topic_post: async (req: Request, res: Response) => {
    try {
      const { chapter_id } = req.params;
      const chapter = await Chapter.findOneById(chapter_id);
      if (!chapter) {
        res.status(404).json({ success: false, msg: "Chapter not found" });
      } else {
        const topic = Topic.create({
          topic_name: req.body.topic_name,
          chapter,
        });
        await topic.save();
        res
          .status(201)
          .json({ success: true, msg: "Topic added Successfully" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },
  topic_read: async (req: Request, res: Response) => {
    try {
      const topic = await Topic.find();
      if (!topic) {
        res.status(404).json({ success: false, msg: "Topic not found" });
      } else {
        res.status(200).json({ success: true, topic });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },

  subtopic_get: async (req: Request, res: Response) => {
    try {
      const { topic_id } = req.params;
      const topicId = await Topic.findOneById(topic_id);
      const subtopic = getSubtopic(topic_id);
      if (!topicId || !subtopic) {
        res.status(404).json({ success: false, msg: "Topic not found" });
      } else {
        res.status(200).json({ success: true, subtopic });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },
  subtopic_post: async (req: Request, res: Response) => {
    try {
      const { topic_id } = req.params;
      const { subtopic_name, url } = req.body;
      const topic = await Topic.findOneById(topic_id);
      if (!topic) {
        res.status(404).json({ success: false, msg: "Topic not found" });
      } else {
        const subtopic = SubTopic.create({
          subtopic_name,
          url,
          topic,
        });
        await subtopic.save();
        res
          .status(201)
          .json({ success: true, msg: "Subtopic added Successfully" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },
  subtopic_read: async (req: Request, res: Response) => {
    try {
      const subtopic = await SubTopic.find();
      if (!subtopic) {
        res.status(404).json({ success: false, msg: "Subtopics not found" });
      } else {
        res.status(200).json({ success: true, subtopic });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },

  activity_read: async (req: Request, res: Response) => {
    try {
      const activity = await Activity.find();
      if (!activity) {
        res.status(404).json({ success: false, msg: "Activity not found" });
      } else {
        res.status(200).json({ success: true, activity });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },
  activity_post: async (req: Request, res: Response) => {
    try {
      const { class_id, subject_id, chapter_id, activity_name, atoms, url } =
        req.body;
      const { user_id } = req.params;
      const classes = await Class.findOneById(class_id);
      const subject = await Subject.findOneById(subject_id);
      const chapter = await Chapter.findOneById(chapter_id);
      const user = await getUser(user_id);
      if (!classes || !subject || !chapter || !user) {
        res.status(400).json({
          success: false,
          msg: "Class or subject or chapter or user not found",
        });
      } else {
        const activity = Activity.create({
          activity_name,
          atoms,
          url,
          classes,
          subject,
          chapter,
          user,
        });
        await activity.save();
        res
          .status(201)
          .json({ success: true, msg: "Activity added Successfully" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },

  goal_post: async (req: Request, res: Response) => {
    try {
      const { class_id, activity_id, winning_team_id, goal_name, week_id } =
        req.body;
      const classes = await Class.findOneById(class_id);
      const activity = await Activity.findOneById(activity_id);
      const team = await Team.findOneById(winning_team_id);
      if (!classes || !activity || !team) {
        res
          .status(404)
          .json({ success: false, msg: "class or team or activity not found" });
      } else {
        const goal = M_Goal.create({
          goal_name,
          week_id,
          classes,
          activity,
          team,
        });
        await goal.save();
        res.status(201).json({ success: true, msg: "Goal added Successfully" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },
  goal_get: async (req: Request, res: Response) => {
    try {
      const goal = await M_Goal.find();
      if (!goal) {
        res.status(404).json({ success: false, msg: "no goal found" });
      } else {
        res.status(200).json({ success: true, goal });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },
  team_post: async (req: Request, res: Response) => {
    try {
      const { user_id, team_name, team_pic, team_atoms } = req.body;
      const user = await getUser(user_id);
      if (!user) {
        res.status(404).json({ suceess: false, msg: "user not found" });
      } else {
        const team = Team.create({ user, team_name, team_pic, team_atoms });
        await team.save();
        res.status(201).json({ success: true, msg: "team added successfully" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },
  team_get: async (req: Request, res: Response) => {
    try {
      const teams = await Team.find();
      if (!teams) {
        res.status(404).json({ suceess: false, msg: "team not found" });
      } else {
        res.status(200).json({ success: true, teams });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },
};
