import {v4 as uuidv4} from "uuid";
import {User, users, posts} from "../models/models.js";


export const createUser = (req,res)=>{
    const body_json = req.body;
    if (body_json.name === undefined)
        res.send("No name specified, could not add user.")
    else{
        const uuid = uuidv4();
        const user = new User(body_json.name, uuid, 0.5);
        users.push(user);
        res.send(`${req.body.name} added successfully with id: ${uuid}.`);
    }
};

export const getAllUsers = (req, res) => {
    res.send(users);
};

export const getUser = (req, res) =>{
    const { user_id } = req.params;
    const user = users.find((user) => user.get_id === user_id);
    res.send(user);
};

export const delUser = (req, res)=>{
    const {user_id} = req.params;
    const name = users.find((user) => user.get_id === user_id).name;
    users = users.filter((user) => user.get_id !== user_id);

    res.send(`${name} was successfully deleted. `)
};

export const getUserPosts = (req, res) =>{
    const {user_id} = req.params;
    const user = users.find((user) => user.get_id === user_id);
    if (user === undefined) {res.send("Could not find user.")}
    else {
        let post_bodies = [];
        console.log(`All posts: ${posts}`);
        console.log(`Posts: ${user.get_posts}`);
        user.get_posts.forEach((post_id) => {
            console.log(`Looking for: ${post_id}`);
            post_bodies.push(posts.find((post) => {
                console.log(`Post ID: ${post.get_id}`);
                return (post.get_id === post_id);
            }));
        });
        res.send(post_bodies);
    }
};

export const createUserPost = (req, res) =>{
    const body_json = req.body;
    const post_id = uuidv4();
    const {user_id} = req.params;
    const text = body_json.text;
    const user = users.find((user) => user.get_id === user_id);
    user.create_post(post_id, text);
    res.send("Post created");
};