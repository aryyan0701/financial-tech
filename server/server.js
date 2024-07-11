import express from 'express';
import dotenv  from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectToMongoDB from './db/connectToMongoDB.js';

dotenv.config();

const PORT = 5000;
const app = express();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get('/', (req, res)=>{
    res.send("Hello World")
})

// app.use("/api/auth")\

app.listen(PORT, ()=>{
    connectToMongoDB()
    console.log('server running on port ${PORT}')
})