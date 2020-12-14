import {posts} from "../models/models.js"

export const getAllPosts = (req, res) => {res.send(posts)};

export const delPost = (req, res) => {
    const {post_id} = req.params;
    posts = posts.filter((post) => post.get_id !== post_id);
    res.send(`Post with ID ${post_id} was successfully deleted.`);
};

export const getPost = (req, res) => {
    const {post_id} = req.params;
    const post = posts.find((post) => post.get_id === post_id);
    res.send(post);
};
