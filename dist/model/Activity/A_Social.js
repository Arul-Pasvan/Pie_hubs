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
exports.A_Social = void 0;
const typeorm_1 = require("typeorm");
const M_Activity_1 = require("../Master/M_Activity");
const Base_1 = require("../Base");
const M_User_1 = require("../Auth/M_User");
const A_Social_Like_1 = require("./A_Social_Like");
const A_Social_View_1 = require("./A_Social_View");
let A_Social = class A_Social extends Base_1.Base {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], A_Social.prototype, "video_url", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], A_Social.prototype, "view", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], A_Social.prototype, "like", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], A_Social.prototype, "atoms_scored", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], A_Social.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => M_User_1.User, (user) => user.goal),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", M_User_1.User)
], A_Social.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => M_Activity_1.Activity, (activity) => activity.goal),
    (0, typeorm_1.JoinColumn)({ name: "activity_id" }),
    __metadata("design:type", M_Activity_1.Activity)
], A_Social.prototype, "activity", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => A_Social_Like_1.A_Social_Like, (social_like) => social_like.social),
    __metadata("design:type", Array)
], A_Social.prototype, "social_like", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => A_Social_View_1.A_Social_View, (social_view) => social_view.social),
    __metadata("design:type", Array)
], A_Social.prototype, "social_view", void 0);
A_Social = __decorate([
    (0, typeorm_1.Entity)("a_social")
], A_Social);
exports.A_Social = A_Social;
//# sourceMappingURL=A_Social.js.map