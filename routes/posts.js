import express from 'express';
import {delPost, getAllPosts, getPost} from "../controllers/posts.js";

const router = express.Router();

router.get('/', getAllPosts);
router.get('/:post_id', getPost);
router.delete('/:post_id', delPost);

export default router;