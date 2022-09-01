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
exports.U_Activity = void 0;
const typeorm_1 = require("typeorm");
const A_Social_1 = require("../Activity/A_Social");
const M_Activity_1 = require("../Master/M_Activity");
const M_User_1 = require("../Auth/M_User");
const Base_1 = require("../Base");
let U_Activity = class U_Activity extends Base_1.Base {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], U_Activity.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], U_Activity.prototype, "atoms_scored", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], U_Activity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], U_Activity.prototype, "video_url", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => M_User_1.User, (user) => user.goal),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", M_User_1.User)
], U_Activity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => M_Activity_1.Activity, (activity) => activity.u_activity),
    (0, typeorm_1.JoinColumn)({ name: "activity_id" }),
    __metadata("design:type", M_Activity_1.Activity)
], U_Activity.prototype, "activity", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => A_Social_1.A_Social, (social) => social.activity),
    __metadata("design:type", Array)
], U_Activity.prototype, "social", void 0);
U_Activity = __decorate([
    (0, typeorm_1.Entity)("u_activity")
], U_Activity);
exports.U_Activity = U_Activity;
//# sourceMappingURL=U_Activity.js.map