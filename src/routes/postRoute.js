import { Router } from "express";
import  Post  from "../models/Post";
const postRouter = Router();

postRouter.get('/', (req, res) => {
    res.send("tous les posts");
})

postRouter.post("/new", (req, res) => {
    let newPost = new Post(req.body);
    newPost.save((err, data) => {
        if (err) console.error(err);
        res.send(data)
    });
})

export default postRouter;