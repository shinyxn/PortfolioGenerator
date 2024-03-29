import express from "express";
import db from "./config/Database.js";
import Users from "./models/UserModel.js";
const app = express();

try {
  await db.authenticate();
  console.log("Connected to Database...");
  await Users.sync();
} catch (error) {
  console.log(error);
}

app.listen(5000, () => console.log("Server running at port 5000\nImport table dari sequelize udah selesai, close saja Ctrl+C"));
