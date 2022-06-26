import express from "express";
import { sequelize, User } from "../models";
import globalRouter from "./router/globalRouter";
import cors from "cors";

const app = express();
const port = 3000;

sequelize
  .sync({ force: false }) // false로 해야 데이터 손실 방지
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(cors({
//   origin : "*",
//   credentials: true
// }));

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  //credentials: 'true'
}

app.use(cors(corsOptions));


app.use("/", globalRouter);

app.get("/position/:position", async (req, res) => {
  const { position } = req.params;
  const sortedUser = [];
  const allUser = await User.findAll({});
  allUser.forEach(user => {
    const positions = user.position.split(", ");
    if(positions.includes(position)){
      sortedUser.push(user);
    }
  })
  return res.json(sortedUser);
});

app.get("/likelion/:lion", async (req, res) => {
  const { lion } = req.params;
  const sortedUser = [];
  const allUser = await User.findAll({});
  allUser.forEach(user => {
    const lions = user.likelion.split(", ");
    if(lions.includes(lion)){
      sortedUser.push(user);
    }
  })
  return res.json(sortedUser);
})

app.listen(port, () => {
  console.log(__dirname);
  console.log(`http://localhost:${port}`);
});