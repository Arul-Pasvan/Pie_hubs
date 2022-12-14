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
exports.TeamMember = void 0;
const typeorm_1 = require("typeorm");
const M_User_1 = require("./Auth/M_User");
const T_Team_1 = require("./T_Team");
const Base_1 = require("./Base");
let TeamMember = class TeamMember extends Base_1.Base {
};
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], TeamMember.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => M_User_1.User, (user) => user.member),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", M_User_1.User)
], TeamMember.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => T_Team_1.Team, (team) => team.member),
    (0, typeorm_1.JoinColumn)({ name: "team_id" }),
    __metadata("design:type", T_Team_1.Team)
], TeamMember.prototype, "team", void 0);
TeamMember = __decorate([
    (0, typeorm_1.Entity)("team_members")
], TeamMember);
exports.TeamMember = TeamMember;
//# sourceMappingURL=T_Team_Members.js.map