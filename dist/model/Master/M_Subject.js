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
exports.Subject = void 0;
const typeorm_1 = require("typeorm");
const M_Activity_1 = require("./M_Activity");
const M_Class_1 = require("./M_Class");
const M_Chapter_1 = require("./M_Chapter");
const Base_1 = require("../Base");
let Subject = class Subject extends Base_1.Base {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Subject.prototype, "subject_name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => M_Class_1.Class, (classes) => classes.subject),
    (0, typeorm_1.JoinColumn)({ name: "class_id" }),
    __metadata("design:type", M_Class_1.Class)
], Subject.prototype, "classes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => M_Chapter_1.Chapter, (chapter) => chapter.subject),
    __metadata("design:type", Array)
], Subject.prototype, "chapter", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => M_Activity_1.Activity, (activity) => activity.subject),
    __metadata("design:type", Array)
], Subject.prototype, "activity", void 0);
Subject = __decorate([
    (0, typeorm_1.Entity)("m_subject")
], Subject);
exports.Subject = Subject;
//# sourceMappingURL=M_Subject.js.map