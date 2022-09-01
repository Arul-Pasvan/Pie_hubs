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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const Base_1 = require("../Base");
const A_Social_1 = require("../Activity/A_Social");
const A_Social_Like_1 = require("../Activity/A_Social_Like");
const A_Social_View_1 = require("../Activity/A_Social_View");
const M_Activity_1 = require("../Master/M_Activity");
const T_Team_1 = require("../T_Team");
const U_Activity_1 = require("../User/U_Activity");
const U_Goal_1 = require("../User/U_Goal");
const T_Team_Members_1 = require("../T_Team_Members");
let User = class User extends Base_1.Base {
};
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], User.prototype, "otp", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false, name: "email_verified" }),
    __metadata("design:type", Boolean)
], User.prototype, "email_verified", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "user_role", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true, name: "active" }),
    __metadata("design:type", Boolean)
], User.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => M_Activity_1.Activity, (activity) => activity.user),
    __metadata("design:type", Array)
], User.prototype, "activity", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => U_Goal_1.U_Goal, (u_goal) => u_goal.user),
    __metadata("design:type", Array)
], User.prototype, "u_goal", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => U_Activity_1.U_Activity, (u_activity) => u_activity.user),
    __metadata("design:type", Array)
], User.prototype, "u_activity", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => T_Team_1.Team, (team) => team.user),
    __metadata("design:type", Array)
], User.prototype, "team", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => T_Team_Members_1.TeamMember, (team_member) => team_member.user),
    __metadata("design:type", T_Team_Members_1.TeamMember)
], User.prototype, "team_member", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => A_Social_1.A_Social, (social) => social.user),
    __metadata("design:type", Array)
], User.prototype, "social", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => A_Social_Like_1.A_Social_Like, (social_like) => social_like.user),
    __metadata("design:type", Array)
], User.prototype, "social_like", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => A_Social_View_1.A_Social_View, (social_view) => social_view.user),
    __metadata("design:type", Array)
], User.prototype, "social_view", void 0);
User = __decorate([
    (0, typeorm_1.Entity)("m_user")
], User);
exports.User = User;
//# sourceMappingURL=M_User.js.map