const express = require('express');
const path = require('path');
const heroesController = require('./../controller/heroesController');

const api = express.Router();

api.post('/check',heroesController.createHero,(req,res)=>{
    return res.status(200).send('Hero created'); 
});

api.get('/check',heroesController.getHeroes,(req,res)=>{
    return res.status(200).send(res.locals.heroes); 
});

api.put('/check/:login',heroesController.updateHero,(req,res)=>{
    return res.status(200).send('Hero updated'); 
});

api.delete('/check/:login',heroesController.deleteHero,(req,res)=>{
    return res.status(200).send('Hero deleted'); 
});

module.exports = api;