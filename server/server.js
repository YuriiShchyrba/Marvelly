const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
let app = express();
const PORT = 3000;
const httpsR = require('https');

const apiRouter = require('./routes/api');
let key = fs.readFileSync(path.join(__dirname, '../localhost-key.pem'), 'utf-8');
let cert = fs.readFileSync(path.join(__dirname, '../localhost.pem'), 'utf-8');
const options = {
    key: key,
    cert: cert
};

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: "http://localhost:8080"
}));

// app.enable('trust proxy');

// console.log('Check if proces')
// console.log(process.env.NODE_ENV)


// app.use(function(request, response, next) {

//     if (process.env.NODE_ENV != 'development' && !request.secure) {
//        return response.redirect("https://" + request.headers.host + request.url);
//     }

//     next();
// })



app.use('/api', apiRouter);


//Error handler
app.use('*', (err, res) => {
    return res.status(404).send('You put unknown address');
});

//Global error handler
app.use((err, req, res, next) => {
    const defaultError = {
        log: 'Global error handler',
        status: 500,
        message: `${err}`
    }
    const Error = Object.assign({}, defaultError, err);
    return res.status(Error.status).json(Error.message);
});

const serverHTTPS = httpsR.createServer(options, app);

app.listen(PORT, () => {
    console.log('Server started at post 3000');
});

module.exports = app;