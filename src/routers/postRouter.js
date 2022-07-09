import { Router } from "express";
import { allPost, createPost } from "../controllers/postController";

const router = Router();

router.get("/", allPost);
router.post("/", createPost);
export default router;