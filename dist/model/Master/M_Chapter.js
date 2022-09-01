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
exports.Chapter = void 0;
const typeorm_1 = require("typeorm");
const M_Activity_1 = require("./M_Activity");
const M_Subject_1 = require("./M_Subject");
const M_Topic_1 = require("./M_Topic");
const Base_1 = require("../Base");
let Chapter = class Chapter extends Base_1.Base {
    constructor() {
        super(...arguments);
        this.subject = M_Subject_1.Subject;
    }
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Chapter.prototype, "chapter_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Chapter.prototype, "category_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Chapter.prototype, "subject_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => M_Subject_1.Subject, (subject) => subject.chapter),
    (0, typeorm_1.JoinColumn)({ name: "subject_id" }),
    __metadata("design:type", Object)
], Chapter.prototype, "subject", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => M_Topic_1.Topic, (topic) => topic.chapter),
    __metadata("design:type", Array)
], Chapter.prototype, "topic", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => M_Activity_1.Activity, (activity) => activity.chapter),
    __metadata("design:type", Array)
], Chapter.prototype, "activity", void 0);
Chapter = __decorate([
    (0, typeorm_1.Entity)("m_chapter")
], Chapter);
exports.Chapter = Chapter;
//# sourceMappingURL=M_Chapter.js.map