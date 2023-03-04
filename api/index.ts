import express, { Application, Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app: Application = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "asdfawefasdf4eertertedrgesdfgsdfg35w4324wtsrftgh";

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);

mongoose.connect(process.env.MONGO_URL as string);

//endpoints
app.get("/test", (req: Request, res: Response) => {
  res.json("test ok");
});

app.get("/profile", (req: Request, res: Response) => {
  const { token } = req.cookies;
  res.json({ token });
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

app.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        { email: userDoc.email, id: userDoc._id },
        jwtSecret,
        {},
        (err: string, token: string) => {
          if (err) throw err;

          res.cookie("token", token).json(userDoc);
        }
      );
    } else {
      res.json("incorrect password");
    }
  } else {
    res.json("email not found");
  }
});

app.listen(4000);
