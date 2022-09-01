"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const db_test_1 = __importDefault(require("./config/db_test"));
const AuthRoute_1 = __importDefault(require("./route/AuthRoute"));
const MasterRoute_1 = __importDefault(require("./route/MasterRoute"));
const app = (0, express_1.default)();
(0, dotenv_1.config)();
(0, db_test_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api", AuthRoute_1.default);
app.use("/api/master", MasterRoute_1.default);
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server is running on Port ${port}.`));
//# sourceMappingURL=index.js.map