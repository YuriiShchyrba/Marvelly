const db = require('./../model/socialModel');

const heroes = {};

heroes.getHero = async (req, res, next) => {
    try {
        const queryStr = `SELECT * FROM heroes WHERE login = $1 AND password = $2`;
        const result = await db.query(queryStr, [req.body.login, req.body.password]);
        res.locals.result = {};
        if (result.rows.length) {
            res.locals.result.OK = true;
            res.locals.result.hero = result.rows[0];
            const { login, password, fullname, birthdate, powers, age } = result.rows[0];
            const addLoggedQuery = `INSERT INTO logged (login, password, fullname, birthdate, powers, age) VALUES ('${login}', '${password}' ,'${fullname}', '${birthdate}', '${powers}', ${age} )`;
            await db.query(addLoggedQuery);
        } else {
            res.locals.result.OK = false;
            res.locals.result.hero = [];
        }
        return next();
    } catch (err) {
        console.log('Err', err);
        return next({
            log: 'Error in heroes.getHeroes Controller',
            message: 'Cant get heroes'
        });
    }
};

heroes.deleteHero = async (req, res, next) => {
    try {
        const queryStr = `DELETE FROM logged WHERE login = $1`;
        const result = await db.query(queryStr, [req.params.login]);
        res.locals.result = {
            OK: true
        };
        return next();
    } catch (err) {
        console.log('Err', err);
        return next({
            log: 'Error in heroes.deleteHero Controller',
            message: 'Cant delete hero'
        });
    }
};

heroes.getMe = async (req, res, next) => {
    try {
        const query = 'SELECT * FROM logged';
        const result = await db.query(query);
        res.locals.result = {};
        if (result.rows.length) {
            res.locals.result.me = result.rows[0];
            res.locals.result.OK = true;
        } else {
            res.locals.result.me = [];
            res.locals.result.OK = false;
        }
        next();
    }
    catch (err) {
        console.log('Err', err);
        return next({
            log: 'Error in heroes.getMe Controller',
            message: 'Cant get your details'
        });
    }
};

heroes.createHero = async (req, res, next) => {
    try {
        const { login, password, fullname, birthdate, powers } = req.body
        const queryStr = `INSERT INTO heroes (login, password, fullname, birthdate, powers, age) VALUES ('${login}', '${password}' ,'${fullname}', '${birthdate}', '${powers}', 25 )`;
        const result = await db.query(queryStr);
        res.locals.result = {};
        res.locals.result.OK = true;
        res.locals.result.me = req.body;
        next();
    } catch (err) {
        console.log('Err', err);
        return next({
            log: 'Error in heroes.createHero Controller',
            message: 'Cant create hero'
        });
    }
};

heroes.getHeroes = async (req, res, next) => {
    try {
        const queryStr = `SELECT * FROM heroes`;
        const result = await db.query(queryStr);
        res.locals.heroes = result.rows;
        return next();
    } catch (err) {
        console.log('Err', err);
        return next({
            log: 'Error in heroes.getHeroes Controller',
            message: 'Cant get heroes'
        });
    }
};

heroes.updateHero = async (req, res, next) => {
    try {
        const queryGetHero = `SELECT * FROM heroes WHERE login = $1`;
        const result = await db.query(queryGetHero, [req.params.login]);
        const changedProps = {};
        if (req.body.password) changedProps.password = req.body.password;
        if (req.body.fullname) changedProps.fullname = req.body.fullname;
        if (req.body.birthdate) {
            // count age
            changedProps.birthdate = req.body.birthdate;
        }
        const hero = Object.assign({}, result.rows[0], changedProps);
        const queryUpdateHero = "UPDATE heroes SET password = $1, fullname = $2, birthdate = $3  WHERE login = $4"
        const updatedResult = await db.query(queryUpdateHero, [hero.password, hero.fullname, hero.birthdate, hero.login]);
        return next();
    } catch (err) {
        console.log('Err', err);
        return next({
            log: 'Error in heroes.updateHero Controller',
            message: 'Cant update hero'
        });
    }
};


heroes.addFriend = async (req,res,next)=>{
    try{
        const yourLogin = req.body.yourlogin;
        const userLogin = req.body.userlogin;
        const query = `INSERT INTO friends (yourlogin, friendlogin) VALUES ('${yourLogin}', '${userLogin}')`;
        const query2 = `INSERT INTO friends (yourlogin, friendlogin) VALUES ('${userLogin}', '${yourLogin}')`;
        const result = await db.query(query);
        const result2 = await db.query(query2);
        next();
    }
    catch (err){
        console.log('Err', err);
        return next({
            log: 'Error in heroes.addFriend Controller',
            message: 'Cant add friend'
        });
    }
};

heroes.deleteFriend = async (req,res,next)=>{
    try{
        const yourLogin = req.body.yourlogin;
        const userLogin = req.body.userlogin;
        const query = `DELETE FROM friends WHERE yourlogin = '${yourLogin}' AND friendlogin = '${userLogin}'`;
        const query2 = `DELETE FROM friends WHERE yourlogin = '${userLogin}' AND friendlogin = '${yourLogin}'`;
        const result = await db.query(query);
        const result2 = await db.query(query2);
        next();
    }
    catch (err){
        console.log('Err', err);
        return next({
            log: 'Error in heroes.deleteFriend Controller',
            message: 'Cant delete friend'
        });
    }
};


heroes.getFriends = async (req,res,next) =>{
    try{
        const yourLogin = req.params.yourlogin; 
        const query = `SELECT * FROM friends WHERE yourlogin = $1`;
        const result = await db.query(query,[yourLogin]);
        const query2 = `SELECT * FROM heroes WHERE login = $1`;
        res.locals.result = {};
        res.locals.result.OK = true;
        res.locals.result.friends = [];
        for( let i = 0; i < result.rows.length; i++){
            const friendLogin = result.rows[i].friendlogin;
            const requestedFriend = await db.query(query2,[friendLogin]);
            res.locals.result.friends.push(requestedFriend.rows[0]);
        }
        next();
    }
    catch (err){
        console.log('Err', err);
        return next({
            log: 'Error in heroes.getFriends Controller',
            message: 'Cant get friends'
        });
    }
};

heroes.sendMessage =  async (req,res,next) =>{
    try{
        const send = req.body.send;
        const get = req.body.get;
        const message = req.body.message;
        const query = `INSERT INTO messages (message, send, get) VALUES ( $1,$2,$3)`;
        const result = await db.query(query,[message,send,get]);
        res.locals.result = {};
        res.locals.result.OK = true;
        next();
    }
    catch(err){
        console.log('Err', err);
        return next({
            log: 'Error in heroes.sendMessage Controller',
            message: 'Cant send message'
        });
    }
};

heroes.getMessages =  async (req,res,next) =>{
    try{
        const send = req.params.send;
        const get = req.params.get;
        const query1 = `SELECT * FROM messages WHERE send = '${send}' AND get = '${get}'`;
        const query2 = `SELECT * FROM messages WHERE send = '${get}' AND get = '${send}'`;
        const result1 = await db.query(query1);
        const result2 = await db.query(query2);
        res.locals.result = {};
        res.locals.result.OK = true;
        res.locals.result.messages = [];
        for( let i = 0; i < result1.rows.length; i++){
            const message = result1.rows[i];
            res.locals.result.messages.push(message);
        }
        for( let i = 0; i < result2.rows.length; i++){
            const message = result2.rows[i];
            res.locals.result.messages.push(message);
        }
        next();
    }
    catch(err){
        console.log('Err', err);
        return next({
            log: 'Error in heroes.sendMessage Controller',
            message: 'Cant send message'
        });
    }
};





module.exports = heroes;

