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
exports.Topic = void 0;
const typeorm_1 = require("typeorm");
const M_Chapter_1 = require("./M_Chapter");
const M_SubTopic_1 = require("./M_SubTopic");
const Base_1 = require("../Base");
let Topic = class Topic extends Base_1.Base {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Topic.prototype, "topic_name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => M_Chapter_1.Chapter, (chapter) => chapter.topic),
    (0, typeorm_1.JoinColumn)({ name: "chapter_id" }),
    __metadata("design:type", M_Chapter_1.Chapter)
], Topic.prototype, "chapter", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => M_SubTopic_1.SubTopic, (subTopic) => subTopic.topic),
    __metadata("design:type", Array)
], Topic.prototype, "subTopic", void 0);
Topic = __decorate([
    (0, typeorm_1.Entity)("m_topic")
], Topic);
exports.Topic = Topic;
//# sourceMappingURL=M_Topic.js.map