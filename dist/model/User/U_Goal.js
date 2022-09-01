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
exports.U_Goal = void 0;
const typeorm_1 = require("typeorm");
const M_Activity_1 = require("../Master/M_Activity");
const M_Goal_1 = require("../Master/M_Goal");
const M_User_1 = require("../Auth/M_User");
const Base_1 = require("../Base");
let U_Goal = class U_Goal extends Base_1.Base {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], U_Goal.prototype, "atoms_scored", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], U_Goal.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => M_User_1.User, (user) => user.goal),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", M_User_1.User)
], U_Goal.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => M_Goal_1.M_Goal, (goal) => goal.u_goal),
    (0, typeorm_1.JoinColumn)({ name: "goal_id" }),
    __metadata("design:type", M_Goal_1.M_Goal)
], U_Goal.prototype, "goal", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => M_Activity_1.Activity, (activity) => activity.goal),
    (0, typeorm_1.JoinColumn)({ name: "activity_id" }),
    __metadata("design:type", M_Activity_1.Activity)
], U_Goal.prototype, "activity", void 0);
U_Goal = __decorate([
    (0, typeorm_1.Entity)("u_goal")
], U_Goal);
exports.U_Goal = U_Goal;
//# sourceMappingURL=U_Goal.js.map