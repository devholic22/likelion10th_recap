import { User } from "../../models";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        return res.json({
            error: "파라메터 오류"
        });
    }
    const exist = await User.findOne({
        where: {
            email
        }
    });
    if(exist){
        return res.json({
            error: "이미 있는 이메일입니다"
        });
    }
    const user = await User.create({
        name,
        email,
        password
    });
    return res.json(user);
}

export const login = async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        return res.json({
            error: "파라메터 오류"
        });
    }
    const exist = await User.findOne({
        where: {
            email
        }
    });
    if(!exist){
        return res.json({
            error: "존재하지 않는 이메일입니다"
        });
    }
    const token = jwt.sign(
        {
            id: exist.id
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "5m",
            issuer: "nodebird"
        }
    );
    return res.json({
        code: 200,
        message: "토큰 발급 완료",
        token
    });
}