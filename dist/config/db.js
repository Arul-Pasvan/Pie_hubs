"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const M_User_1 = require("../model/Auth/M_User");
const M_Student_1 = require("../model/Auth/M_Student");
const M_Class_1 = require("../model/Master/M_Class");
const M_Subject_1 = require("../model/Master/M_Subject");
const M_Chapter_1 = require("../model/Master/M_Chapter");
const M_Topic_1 = require("../model/Master/M_Topic");
const M_SubTopic_1 = require("../model/Master/M_SubTopic");
const M_Activity_1 = require("../model/Master/M_Activity");
const A_Social_1 = require("../model/Activity/A_Social");
const A_Social_Like_1 = require("../model/Activity/A_Social_Like");
const A_Social_View_1 = require("../model/Activity/A_Social_View");
const M_Goal_1 = require("../model/Master/M_Goal");
const U_Activity_1 = require("../model/User/U_Activity");
const U_Goal_1 = require("../model/User/U_Goal");
const T_Team_1 = require("../model/T_Team");
const T_Team_Members_1 = require("../model/T_Team_Members");
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, typeorm_1.createConnection)({
            type: "postgres",
            host: "screenit.cpgmuun9semi.ap-south-1.rds.amazonaws.com",
            port: 5000,
            username: "postgres",
            password: "ScreenitawsDB2020",
            database: "pie_hub",
            entities: [
                M_User_1.User,
                M_Student_1.Student,
                M_Class_1.Class,
                M_Subject_1.Subject,
                M_Chapter_1.Chapter,
                M_Topic_1.Topic,
                M_SubTopic_1.SubTopic,
                M_Activity_1.Activity,
                A_Social_1.A_Social,
                A_Social_Like_1.A_Social_Like,
                A_Social_View_1.A_Social_View,
                M_Goal_1.M_Goal,
                U_Activity_1.U_Activity,
                U_Goal_1.U_Goal,
                T_Team_1.Team,
                T_Team_Members_1.TeamMember,
            ],
            synchronize: true,
        });
        console.log("connected to postgres");
    }
    catch (err) {
        console.log("Unable to connect \n", err);
    }
});
//# sourceMappingURL=db.js.map