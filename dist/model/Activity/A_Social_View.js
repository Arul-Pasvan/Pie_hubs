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
exports.A_Social_View = void 0;
const typeorm_1 = require("typeorm");
const Base_1 = require("../Base");
const M_User_1 = require("../Auth/M_User");
const A_Social_1 = require("./A_Social");
let A_Social_View = class A_Social_View extends Base_1.Base {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => M_User_1.User, (user) => user.goal),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", M_User_1.User)
], A_Social_View.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => A_Social_1.A_Social, (social) => social.view),
    (0, typeorm_1.JoinColumn)({ name: "social_activity_id" }),
    __metadata("design:type", A_Social_1.A_Social)
], A_Social_View.prototype, "social", void 0);
A_Social_View = __decorate([
    (0, typeorm_1.Entity)("a_social_view")
], A_Social_View);
exports.A_Social_View = A_Social_View;
//# sourceMappingURL=A_Social_View.js.map