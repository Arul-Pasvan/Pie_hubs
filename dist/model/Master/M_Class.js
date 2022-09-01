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
exports.Class = void 0;
const typeorm_1 = require("typeorm");
const M_Activity_1 = require("./M_Activity");
const M_Goal_1 = require("./M_Goal");
const M_Subject_1 = require("./M_Subject");
const Base_1 = require("../Base");
let Class = class Class extends Base_1.Base {
};
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Class.prototype, "class_name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => M_Subject_1.Subject, (subject) => subject.classes),
    __metadata("design:type", Array)
], Class.prototype, "subject", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => M_Activity_1.Activity, (activity) => activity.classes),
    __metadata("design:type", Array)
], Class.prototype, "activity", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => M_Goal_1.M_Goal, (m_goal) => m_goal.classes),
    __metadata("design:type", M_Goal_1.M_Goal)
], Class.prototype, "m_goal", void 0);
Class = __decorate([
    (0, typeorm_1.Entity)("m_class")
], Class);
exports.Class = Class;
//# sourceMappingURL=M_Class.js.map