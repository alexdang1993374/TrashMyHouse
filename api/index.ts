import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

app.use(cors());

app.get("/test", (req: Request, res: Response) => {
  res.json("test ok");
});

app.listen(4000);
