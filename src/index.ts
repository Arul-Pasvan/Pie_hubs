import express from "express";
import cors from "cors";
import { config } from "dotenv";
// import db from "./config/db";
import db from "./config/db_test";
import Auth from "./route/AuthRoute";
import Dashboard from "./route/MasterRoute";
import Activity from "./route/ActivityRoute";

const app = express();
config();
db();
app.use(express.json());
app.use(cors());
app.use("/api", Auth);
app.use("/api/master", Dashboard);
app.use("/api", Activity);

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server is running on Port ${port}.`));
