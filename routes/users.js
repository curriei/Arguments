import express from 'express';
import { createUser, getAllUsers, getUser, delUser, getUserPosts, createUserPost} from "../controllers/users.js";

const router = express.Router();


router.get('/', getAllUsers);

router.post('/', createUser);

router.get('/:user_id', getUser);

router.get('/:user_id/posts', getUserPosts);

router.post('/:user_id/posts', createUserPost);

router.delete('/:user_id', delUser);


export default router;