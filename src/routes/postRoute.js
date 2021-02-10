import { Router } from "express";
const postRouter = Router();

postRouter.get('/', (req, res) => {
    res.send("tous les posts");
})



export default postRouter;