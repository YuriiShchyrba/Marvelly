const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const apiRouter = require('./routes/api');

app.use(express.json());

app.use('/',apiRouter);


//Error handler
app.use('*',(err,res)=>{
    return res.status(404).send('You put unknown address');
});

//Global error handler
app.use((err,req,res,next)=>{
    const defaultError = {
        log: 'Global error handler',
        status: 500,
        message: `${err}`
    }
    const Error = Object.assign({},defaultError,err);
    return res.status(Error.status).json(Error.message);
});

app.listen(PORT,()=>{
    console.log('Server started at post 3000');
});

module.exports = app;