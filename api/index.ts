import express, { Application, Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
const bcrypt = require("bcryptjs");
const User = require("./models/User");
require("dotenv").config();

const app: Application = express();

const bcryptSalt = bcrypt.genSaltSync(10);

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);

mongoose.connect(process.env.MONGO_URL as string);

app.get("/test", (req: Request, res: Response) => {
  res.json("test ok");
});

app.post("/register", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.listen(4000);
