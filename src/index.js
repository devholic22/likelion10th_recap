import express from "express";
import {sequelize} from "../models";

const app = express();
const PORT = 3000;

sequelize.sync({ force: false }).then(() => {
    console.log("데이터베이스 연결 성공");
}).catch((err) => {
    console.log(err);
});

app.use(express.json());
const handleListen = () => {
    console.log(`Server listening at: http://localhost:${PORT}`);
}

app.listen(PORT, handleListen);