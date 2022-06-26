import { User } from "../../models";

export const getAllUser = async (req, res) => {
    const users = await User.findAll({});
    return res.json(users);
};

export const getUser = async (req, res) => {
    const {name} = req.params;
    if(!name){
        return res.json({
            "error" : "잘못된 요청"
        })
    }
    const user = await User.findOne({
        where: {name: name}
    })
    if(!user){
        res.json({
            "error" : "해당 유저가 없습니다."
        })
    }
    return res.json(user);
}
export const makeUser = async (req, res) => {
    const {name, position, email, github, insta, likelion, phone} = req.body;
    /*
    if(!name || !position || !email || !github || !insta || !likelion || !phone){
        return res.json({
            "error" : "잘못된 요청"
        })
    };
    */
    const newUser = await User.create({
        name, position, email, github, insta, likelion, phone
    });
    const allUser = await User.findAll({});

    return res.json(allUser);
};