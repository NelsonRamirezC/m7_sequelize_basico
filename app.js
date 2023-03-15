import express from 'express'

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

export default app;