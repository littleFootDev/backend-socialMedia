import { Router } from "express";
import  Post  from "../models/Post";
const postRouter = Router();

postRouter.get('/', (req, res) => {
    Post.find({}, (err, datas) => {
        if (err) console.error(err);
        res.send(datas);
    })
})

postRouter.post("/new", (req, res) => {
    let newPost = new Post(req.body);
    newPost.save((err, data) => {
        if (err) console.error(err);
        res.send(data)
    });
})

postRouter.get("/:post_id", (req, res) => {
   Post.findById( {_id:req.params.post_id}, (err, data) => {
        if (err) console.error(err);
        res.send(data);
   })
})
postRouter.put("/:post_id", (req, res) => {
   Post.findById( {_id:req.params.post_id}, (err, data) => {
        if (err) console.error(err);
        Object.assign(data, req.body ).save((err, data) => {
            if (err) console.error(err);
            res.send(data);
        })
   })
})

postRouter.delete("/:post_id", (req, res) => {
    Post.remove({_id:req.params.post_id}, (err) => {
        if (err) console.error(err);
        res.send("le post à bien été suprimé !");
    })
})



export default postRouter;