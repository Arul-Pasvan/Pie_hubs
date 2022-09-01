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
const User_1 = require("../model/User");
const Student_1 = require("../model/Student");
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, typeorm_1.createConnection)({
            type: "postgres",
            host: "screenit.cpgmuun9semi.ap-south-1.rds.amazonaws.com",
            port: 5000,
            username: "postgres",
            password: "ScreenitawsDB2020",
            database: "pie_hub",
            entities: [User_1.User, Student_1.Student],
            synchronize: true,
        });
        console.log("connected to postgres");
    }
    catch (err) {
        console.log("Unable to connect \n", err);
    }
});
//# sourceMappingURL=config.js.map