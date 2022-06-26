import { Router } from "express";
import { getAllUser, makeUser, getUser } from "../controller/userController";

const userRouter = Router();

userRouter.get("/", getAllUser);
userRouter.get("/:name", getUser);
userRouter.post("/", makeUser);

export default userRouter;