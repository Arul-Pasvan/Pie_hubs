import { createQueryBuilder } from "typeorm";
import { M_Goal } from "../model/Master/M_Goal";
import { User } from "../model/Auth/M_User";
import { Activity } from "../model/Master/M_Activity";
import { Team } from "../model/Master/M_Team";
import { A_Social_Like } from "../model/Activity/A_Social_Like";
import { A_Social } from "../model/Activity/A_Social";
import { Subject } from "../model/Master/M_Subject";
import { Chapter } from "../model/Master/M_Chapter";
import { Topic } from "../model/Master/M_Topic";
import { SubTopic } from "../model/Master/M_SubTopic";

function getUser(id: string) {
  const user = User.findOneById(id);
  return user;
}

function getGoal(id: string) {
  const goal = M_Goal.findOneById(id);
  return goal;
}

function getActivity(id: string) {
  const activity = Activity.findOneById(id);
  return activity;
}

function getTeam(id: string) {
  const team = Team.findOneById(id);
  return team;
}

function getSocialLike(uId: string, sId: string) {
  const social_like = createQueryBuilder(A_Social_Like)
    .where("user_id=:user_id", { uId })
    .andWhere("social_activity_id=:social_activity_id", {
      sId,
    })
    .execute();
  return social_like;
}

function getSocial(id: string) {
  const social = A_Social.findOneById(id);
  return social;
}

function deleteLike(uId: string, sId: string) {
  createQueryBuilder(A_Social_Like, "a_social_like")
    .delete()
    .where("user_id=:user_id", { uId })
    .andWhere("social_activity_id=:social_activity_id", {
      sId,
    })
    .execute();
}

function updateOtp(otp: number, id: string) {
  createQueryBuilder(User)
    .update(User)
    .set({ otp })
    .where("id = :id", { id })
    .execute();
}

function updateVerify(email) {
  createQueryBuilder(User)
    .update(User)
    .set({ email_verified: true })
    .where("email = :email", { email })
    .execute();
}

function getSubjects(id: string) {
  const subject = createQueryBuilder(Subject)
    .where("m_subject.class_id = :class_id", { id })
    .getMany();
  return subject;
}

function getChapter() {
  const chapter = Chapter.find({
    order: {
      category_name: "DESC",
    },
  });
  return chapter;
}

function getChapters(id: string) {
  const chapter = createQueryBuilder(Chapter, "m_chapter")
    .where("m_chapter.subject_id = :subject_id", { id })
    .getMany();
  return chapter;
}

function getTopic(id: string) {
  const topic = createQueryBuilder(Topic, "m_topic")
    .where("m_topic.chapter_id = :chapter_id", { id })
    .getMany();
  return topic;
}

function getSubtopic(id: string) {
  const subtopic = createQueryBuilder(SubTopic).where(
    "m_subtopic.topic_id=:subtopic_id",
    { id }
  );
  return subtopic;
}

export {
  getUser,
  getGoal,
  getActivity,
  getTeam,
  getSocialLike,
  getSocial,
  deleteLike,
  updateOtp,
  updateVerify,
  getSubjects,
  getChapter,
  getChapters,
  getTopic,
  getSubtopic,
};
