import { Post, User } from "../../models";

export const allPost = async (req, res) => {
    const all = await Post.findAll({});
    return res.json(all);
}

export const createPost = async (req, res) => {
    const {title, content} = req.body;
    const {id} = req.decoded;
    console.log(req.decoded);
    if(!title || !content){
        return res.json({
            error: "파라메터 오류"
        });
    }
    const user = await User.findOne({
        where: {
            id
        }
    })
    const post = await Post.create({
        title,
        content,
        writer: user.name
    });
    return res.json(post);
}