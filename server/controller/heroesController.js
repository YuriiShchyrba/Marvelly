const db = require('./../model/socialModel');

const heroes = {};

heroes.createHero = async (req,res,next)=>{
    try{
        // count age birthday - now
        const queryStr = `INSERT INTO heroes (login, password, fullName, birthdate, powers, age) VALUES ('tony', '1234' ,'Tony Stark', '1996-03-27', 'React,Redux,Express', 25 )`;
        const result = await db.query(queryStr);
        res.locals.hero = result;
        return next();
    }catch (err){
        console.log('Err' , err);
        return next({
            log:'Error in heroes.createHero Controller',
            message: 'Cant create hero'
        });
    }
};

heroes.getHeroes = async (req,res,next)=>{
    try{
        const queryStr = `SELECT * FROM heroes`;
        const result = await db.query(queryStr);
        res.locals.heroes = result.rows;
        return next();
    }catch (err){
        console.log('Err' , err);
        return next({
            log:'Error in heroes.getHeroes Controller',
            message: 'Cant get heroes'
        });
    }
};

heroes.updateHero = async (req,res,next)=>{
    try{
        const queryGetHero = `SELECT * FROM heroes WHERE login = $1`;
        const result = await db.query(queryGetHero,[req.params.login]);
        const changedProps = {};
        if(req.body.password) changedProps.password = req.body.password;
        if(req.body.fullname) changedProps.fullname = req.body.fullname;
        if(req.body.birthdate){
           // count age
          changedProps.birthdate = req.body.birthdate;
        }   
        const hero = Object.assign({},result.rows[0],changedProps);
        const queryUpdateHero = "UPDATE heroes SET password = $1, fullname = $2, birthdate = $3  WHERE login = $4"
        const updatedResult = await db.query(queryUpdateHero,[hero.password,hero.fullname,hero.birthdate,hero.login]);
        return next();
    }catch (err){
        console.log('Err' , err);
        return next({
            log:'Error in heroes.updateHero Controller',
            message: 'Cant update hero'
        });
    }
};

heroes.deleteHero = async (req,res,next)=>{
    try{
        const queryStr = `DELETE FROM heroes WHERE login = $1`;
        const result = await db.query(queryStr,[req.params.login]);
        return next();
    }catch (err){
        console.log('Err' , err);
        return next({
            log:'Error in heroes.deleteHero Controller',
            message: 'Cant delete hero'
        });
    }
};



module.exports = heroes;

