import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/socialmediadb', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('connection réussie'));
const app = express();
dotenv.config();

const port = process.env.PORT;
import postRouter from './routes/postRoute';
import authRoute from './routes/authRoute';
app.use(express.urlencoded({extended: true}));
app.get('/', (req, res) => {
    res.send("bienvenue sur notre API!")
})
app.use('/posts', postRouter);
app.use('/auth', authRoute);
app.listen(port, () => {
    console.log(`application is running on port : ${port}`)
})
