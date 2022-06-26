import { Router } from "express";
import userRouter from "./userRouter";

const globalRouter = Router();

globalRouter.get("/", (req, res) => {
    return res.status(200).send("웹사이트");
});

globalRouter.use("/users", userRouter);

export default globalRouter;