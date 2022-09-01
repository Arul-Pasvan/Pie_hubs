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
exports.SubTopic = void 0;
const typeorm_1 = require("typeorm");
const M_Topic_1 = require("./M_Topic");
const Base_1 = require("../Base");
let SubTopic = class SubTopic extends Base_1.Base {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SubTopic.prototype, "subtopic_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SubTopic.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => M_Topic_1.Topic, (topic) => topic.subTopic),
    (0, typeorm_1.JoinColumn)({ name: "topic_id" }),
    __metadata("design:type", M_Topic_1.Topic)
], SubTopic.prototype, "topic", void 0);
SubTopic = __decorate([
    (0, typeorm_1.Entity)("m_subtopic")
], SubTopic);
exports.SubTopic = SubTopic;
//# sourceMappingURL=M_SubTopic.js.map