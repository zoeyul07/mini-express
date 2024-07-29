import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import helmet from "helmet";
import tweetsRouter from "./router/tweets";
const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));

app.use("/tweets", tweetsRouter);

//위의 미들웨어에서 다 처리하지 못했다면
app.use((req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(404);
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  res.sendStatus(500);
});

app.listen(8080, () => {
  console.log("started");
});
