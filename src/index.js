import dotenv from "dotenv";
dotenv.config();
import express from "express";
import authRouter from "./routers/authRouter";
import postRouter from "./routers/postRouter";
import {sequelize} from "../models";
import {verifyToken} from "./middlewares/verifyToken";

const app = express();
const PORT = 3000;

sequelize.sync({ force: false }).then(() => {
    console.log("데이터베이스 연결 성공");
}).catch((err) => {
    console.log(err);
});

app.use(express.json());
app.use('/auth', authRouter);
app.use('/post', verifyToken, postRouter);

const handleListen = () => {
    console.log(`Server listening at: http://localhost:${PORT}`);
}

app.listen(PORT, handleListen);