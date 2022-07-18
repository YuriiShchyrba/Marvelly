const express = require('express');
const path = require('path');
const heroesController = require('./../controller/heroesController');

const api = express.Router();

api.post('/signin',heroesController.createHero,(req,res)=>{
    return res.status(200).send(res.locals.result); 
});

api.get('/check',(req,res)=>{
    return res.status(200).send('Works');
})

api.get('/me',heroesController.getMe,(req,res)=>{
    return res.status(200).send(res.locals.result); 
});


api.post('/login',heroesController.getHero,(req,res)=>{
    return res.status(200).send(res.locals.result); 
});


api.delete('/logout/:login',heroesController.deleteHero,(req,res)=>{
    return res.status(200).send(res.locals.result); 
});

api.get('/getheroes',heroesController.getHeroes,(req,res)=>{
    return res.status(200).send(res.locals.heroes); 
});

api.post('/addfriend/:yourlogin',heroesController.addFriend,heroesController.getFriends,(req,res)=>{
    return res.status(200).send(res.locals.result); 
});

api.delete('/deletefriend/:yourlogin',heroesController.deleteFriend,heroesController.getFriends,(req,res)=>{
    return res.status(200).send(res.locals.result); 
});

api.get('/getfriends/:yourlogin',heroesController.getFriends,(req,res)=>{
    return res.status(200).send(res.locals.result); 
});

// api.put('/check/:login',heroesController.updateHero,(req,res)=>{
//     return res.status(200).send('Hero updated'); 
// });

api.post('/sendmessage',heroesController.sendMessage, (req,res)=>{
    return res.status(200).send(res.locals.result); 
});

api.get('/getmessage/:send/:get',heroesController.getMessages, (req,res)=>{
    return res.status(200).send(res.locals.result); 
});


module.exports = api;