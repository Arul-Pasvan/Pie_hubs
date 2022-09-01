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
exports.M_Goal = void 0;
const typeorm_1 = require("typeorm");
const Base_1 = require("../Base");
const M_Activity_1 = require("./M_Activity");
const U_Goal_1 = require("../User/U_Goal");
const M_Class_1 = require("./M_Class");
const T_Team_1 = require("../T_Team");
let M_Goal = class M_Goal extends Base_1.Base {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], M_Goal.prototype, "goal_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], M_Goal.prototype, "week_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], M_Goal.prototype, "winning_team_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], M_Goal.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => M_Class_1.Class, (classes) => classes.activity),
    (0, typeorm_1.JoinColumn)({ name: "class_id" }),
    __metadata("design:type", M_Class_1.Class)
], M_Goal.prototype, "classes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => M_Activity_1.Activity, (activity) => activity.goal),
    (0, typeorm_1.JoinColumn)({ name: "activity_id" }),
    __metadata("design:type", M_Activity_1.Activity)
], M_Goal.prototype, "activity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => T_Team_1.Team, (team) => team.goal),
    (0, typeorm_1.JoinColumn)({ name: "winning_team_id" }),
    __metadata("design:type", T_Team_1.Team)
], M_Goal.prototype, "team", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => U_Goal_1.U_Goal, (u_goal) => u_goal.goal),
    __metadata("design:type", Array)
], M_Goal.prototype, "u_goal", void 0);
M_Goal = __decorate([
    (0, typeorm_1.Entity)("m_goal")
], M_Goal);
exports.M_Goal = M_Goal;
//# sourceMappingURL=M_Goal.js.map