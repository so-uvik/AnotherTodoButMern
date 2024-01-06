import express from 'express'
import 'dotenv/config';

const app = express()
app.get('/',(req,res)=>{
    res.send('Hello, World!');
});
//hello this is a text.
export default app;
