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
exports.Team = void 0;
const typeorm_1 = require("typeorm");
const M_User_1 = require("./Auth/M_User");
const T_Team_Members_1 = require("./T_Team_Members");
const Base_1 = require("./Base");
const M_Goal_1 = require("./Master/M_Goal");
let Team = class Team extends Base_1.Base {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Team.prototype, "team_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Team.prototype, "team_pic", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Team.prototype, "team_atoms", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Team.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => M_User_1.User, (user) => user.goal),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", M_User_1.User)
], Team.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => T_Team_Members_1.TeamMember, (team_member) => team_member.team),
    __metadata("design:type", Array)
], Team.prototype, "team_member", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => M_Goal_1.M_Goal, (goal) => goal.team),
    __metadata("design:type", Array)
], Team.prototype, "goal", void 0);
Team = __decorate([
    (0, typeorm_1.Entity)("m_team")
], Team);
exports.Team = Team;
//# sourceMappingURL=T_Team.js.map