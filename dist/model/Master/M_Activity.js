"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
const typeorm_1 = require("typeorm");
const Base_1 = require("../Base");
const M_Chapter_1 = require("./M_Chapter");
const M_Class_1 = require("./M_Class");
const M_Subject_1 = require("./M_Subject");
const M_User_1 = require("../Auth/M_User");
const U_Activity_1 = require("../User/U_Activity");
const U_Goal_1 = require("../User/U_Goal");
const A_Social_1 = require("../Activity/A_Social");
const M_Goal_1 = require("./M_Goal");
let Activity = class Activity extends Base_1.Base {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Activity.prototype, "activity_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Activity.prototype, "atoms", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Activity.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Activity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => M_Class_1.Class, (classes) => classes.activity),
    (0, typeorm_1.JoinColumn)({ name: "class_id" }),
    __metadata("design:type", M_Class_1.Class)
], Activity.prototype, "classes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => M_Subject_1.Subject, (subject) => subject.activity),
    (0, typeorm_1.JoinColumn)({ name: "subject_id" }),
    __metadata("design:type", M_Subject_1.Subject)
], Activity.prototype, "subject", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => M_Chapter_1.Chapter, (chapter) => chapter.activity),
    (0, typeorm_1.JoinColumn)({ name: "chapter_id" }),
    __metadata("design:type", M_Chapter_1.Chapter)
], Activity.prototype, "chapter", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => M_User_1.User, (user) => user.activity),
    (0, typeorm_1.JoinColumn)({ name: "created_by" }),
    __metadata("design:type", M_User_1.User)
], Activity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => U_Goal_1.U_Goal, (u_goal) => u_goal.activity),
    __metadata("design:type", Array)
], Activity.prototype, "u_goal", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => U_Activity_1.U_Activity, (u_activity) => u_activity.activity),
    __metadata("design:type", Array)
], Activity.prototype, "u_activity", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => A_Social_1.A_Social, (a_social) => a_social.activity),
    __metadata("design:type", Array)
], Activity.prototype, "a_social", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => M_Goal_1.M_Goal, (m_goal) => m_goal.activity),
    __metadata("design:type", Array)
], Activity.prototype, "m_goal", void 0);
Activity = __decorate([
    (0, typeorm_1.Entity)("m_activity")
], Activity);
exports.Activity = Activity;
//# sourceMappingURL=M_Activity.js.map