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
const typeorm_1 = require("typeorm");
const M_Class_1 = require("../model/Master/M_Class");
const M_Subject_1 = require("../model/Master/M_Subject");
const M_Chapter_1 = require("../model/Master/M_Chapter");
const M_Topic_1 = require("../model/Master/M_Topic");
const M_SubTopic_1 = require("../model/Master/M_SubTopic");
const M_Activity_1 = require("../model/Master/M_Activity");
const M_User_1 = require("../model/Auth/M_User");
const M_Goal_1 = require("../model/Master/M_Goal");
const T_Team_1 = require("../model/T_Team");
exports.default = {
    class_get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const stnds = yield M_Class_1.Class.find();
            res.status(200).json({ success: true, class: stnds });
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    class_post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const stnds = M_Class_1.Class.create({
                class_name: req.body.class_name,
            });
            yield stnds.save();
            res.status(201).json({ success: true, msg: "Class added successfully" });
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    subject_get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { class_id } = req.params;
            const classId = yield M_Class_1.Class.findOneById(class_id);
            if (!classId) {
                res.status(404).json({ success: false, msg: "Class not found" });
            }
            else {
                const subject = yield (0, typeorm_1.createQueryBuilder)(M_Subject_1.Subject, "m_subject")
                    .where("m_subject.class_id = :class_id", { class_id })
                    .getMany();
                if (subject) {
                    res.status(200).json({ success: true, subject });
                }
                else {
                    res.status(404).json({
                        success: false,
                        msg: "No subjects found for class " + class_id,
                    });
                }
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    subject_post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { class_id } = req.params;
            const classes = yield M_Class_1.Class.findOneById(class_id);
            if (!classes) {
                res.status(404).json({ success: false, msg: "Class not found" });
            }
            else {
                const subject = M_Subject_1.Subject.create({
                    subject_name: req.body.subject_name,
                    classes,
                });
                yield subject.save();
                res
                    .status(201)
                    .json({ success: true, msg: "Subject added Successfully" });
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    subject_read: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const subject = yield M_Subject_1.Subject.find();
            if (!subject) {
                res.status(404).json({ success: false, msg: "Subject not found" });
            }
            else {
                res.status(200).json({ success: true, subject });
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    chapter_read: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const chapter = yield M_Chapter_1.Chapter.find();
            if (!chapter) {
                res.status(404).json({ success: false, msg: "Chapter not found" });
            }
            else {
                res.status(200).json({ success: true, chapter });
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    chapter_category: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const chapter = yield M_Chapter_1.Chapter.find({
                order: {
                    category_name: "DESC",
                },
            });
            res.status(200).send({ success: true, chapter });
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    chapter_get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { subject_id } = req.params;
            const subId = yield M_Subject_1.Subject.findOneById(subject_id);
            if (!subId) {
                res.status(404).json({ success: false, msg: "Subject not found" });
            }
            else {
                const chapter = yield (0, typeorm_1.createQueryBuilder)(M_Chapter_1.Chapter, "m_chapter")
                    .where("m_chapter.subject_id = :subject_id", { subject_id })
                    .getMany();
                if (chapter.length > 0) {
                    res.status(200).json({ success: true, chapter });
                }
                else {
                    res.status(404).json({
                        success: false,
                        msg: "No Chapters found for Subject " + subject_id,
                    });
                }
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    chapter_post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { subject_id } = req.params;
            const { chapter_name, category_name } = req.body;
            const subject = yield M_Subject_1.Subject.findOneById(subject_id);
            if (!subject) {
                res.status(404).json({ success: false, msg: "Subject not found" });
            }
            else {
                const chapter = M_Chapter_1.Chapter.create({
                    chapter_name,
                    category_name,
                    subject,
                });
                yield chapter.save();
                res
                    .status(201)
                    .json({ success: true, msg: "Chapter added Successfully" });
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    topic_get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { chapter_id } = req.params;
            const chapterId = yield M_Chapter_1.Chapter.findOneById(chapter_id);
            if (!chapterId) {
                res.status(404).json({ success: false, msg: "Chapter not found" });
            }
            else {
                const topic = yield (0, typeorm_1.createQueryBuilder)(M_Topic_1.Topic, "m_topic")
                    .where("m_topic.chapter_id = :chapter_id", { chapter_id })
                    .getMany();
                if (topic.length > 0) {
                    res.status(200).json({ success: true, topic });
                }
                else {
                    res.status(404).json({
                        success: false,
                        msg: "No Topics found for chapter " + chapter_id,
                    });
                }
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    topic_post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { chapter_id } = req.params;
            const chapter = yield M_Chapter_1.Chapter.findOneById(chapter_id);
            if (!chapter) {
                res.status(404).json({ success: false, msg: "Chapter not found" });
            }
            else {
                const topic = M_Topic_1.Topic.create({
                    topic_name: req.body.topic_name,
                    chapter,
                });
                yield topic.save();
                res
                    .status(201)
                    .json({ success: true, msg: "Topic added Successfully" });
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    topic_read: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const topic = yield M_Topic_1.Topic.find();
            if (!topic) {
                res.status(404).json({ success: false, msg: "Topic not found" });
            }
            else {
                res.status(200).json({ success: true, topic });
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    subtopic_get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { topic_id } = req.params;
            const topicId = yield M_Topic_1.Topic.findOneById(topic_id);
            if (!topicId) {
                res.status(404).json({ success: false, msg: "Topic not found" });
            }
            else {
                const subtopic = yield (0, typeorm_1.createQueryBuilder)(M_SubTopic_1.SubTopic, "m_subtopic")
                    .where("m_subtopic.topic_id = :topic_id", { topic_id })
                    .getMany();
                if (subtopic.length > 0) {
                    res.status(200).json({ success: true, subtopic });
                }
                else {
                    res.status(400).json({
                        success: false,
                        msg: "No Sub-Topics found for Topic " + topic_id,
                    });
                }
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    subtopic_post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { topic_id } = req.params;
            const { subtopic_name, url } = req.body;
            const topic = yield M_Topic_1.Topic.findOneById(topic_id);
            if (!topic) {
                res.status(404).json({ success: false, msg: "Topic not found" });
            }
            else {
                const subtopic = M_SubTopic_1.SubTopic.create({
                    subtopic_name,
                    url,
                    topic,
                });
                yield subtopic.save();
                res
                    .status(201)
                    .json({ success: true, msg: "Subtopic added Successfully" });
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    subtopic_read: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const subtopic = yield M_SubTopic_1.SubTopic.find();
            if (!subtopic) {
                res.status(404).json({ success: false, msg: "Subtopics not found" });
            }
            else {
                res.status(200).json({ success: true, subtopic });
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    activity_read: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const activity = yield M_Activity_1.Activity.find();
            if (!activity) {
                res.status(404).json({ success: false, msg: "Activity not found" });
            }
            else {
                res.status(200).json({ success: true, activity });
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    activity_post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { class_id, subject_id, chapter_id, activity_name, atoms, url, } = req.body;
            const { user_id } = req.params;
            const classes = yield M_Class_1.Class.findOneById(class_id);
            if (!classes) {
                res.status(400).json({ success: false, msg: "Class not found" });
            }
            else {
                const subject = yield M_Subject_1.Subject.findOneById(subject_id);
                if (!subject) {
                    res.status(400).json({ success: false, msg: "Subject not found" });
                }
                else {
                    const chapter = yield M_Chapter_1.Chapter.findOneById(chapter_id);
                    if (!chapter) {
                        res.status(400).json({ success: false, msg: "Chapter not found" });
                    }
                    else {
                        const user = yield M_User_1.User.findOneById(user_id);
                        if (!user) {
                            res.status(404).json({ success: false, msg: "user not found" });
                        }
                        else {
                            const activity = M_Activity_1.Activity.create({
                                activity_name,
                                atoms,
                                url,
                                classes,
                                subject,
                                chapter,
                                user,
                            });
                            yield activity.save();
                            res
                                .status(201)
                                .json({ success: true, msg: "Activity added Successfully" });
                        }
                    }
                }
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    goal_post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { class_id, activity_id, winning_team_id, goal_name, week_id } = req.body;
            const classes = yield M_Class_1.Class.findOneById(class_id);
            if (!classes) {
                res.status(404).json({ success: false, msg: "class not found" });
            }
            else {
                const activity = yield M_Activity_1.Activity.findOneById(activity_id);
                if (!activity) {
                    res.status(404).json({ success: false, msg: "activity not found" });
                }
                else {
                    const team = yield T_Team_1.Team.findOneById(winning_team_id);
                    if (!team) {
                        res.status(404).json({ success: false, msg: "team not found" });
                    }
                    else {
                        const goal = M_Goal_1.M_Goal.create({
                            goal_name,
                            week_id,
                            classes,
                            activity,
                            team,
                        });
                        yield goal.save();
                        res
                            .status(201)
                            .json({ success: true, msg: "Goal added Successfully" });
                    }
                }
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
    goal_get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const goal = yield M_Goal_1.M_Goal.find();
            if (!goal) {
                res.status(404).json({ success: false, msg: "no goal found" });
            }
            else {
                res.status(200).json({ success: true, goal });
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "invalid request" });
        }
    }),
};
//# sourceMappingURL=MasterController.js.map