import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send("bienvenue sur notre API!")
})

app.listen(port, () => {
    console.log(`application is running on port : ${port}`)
})