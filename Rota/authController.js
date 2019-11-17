const express = require('express')
const User = require('../db_apis/usuario')
const Movie = require('../db_apis/movies')
const router = express.Router();

router.post('/register', async (req, res)=>{
    try{
        const user = await User.create(req.body);
        return res.send({user});
    }catch(err){
        res.status(400).send({error: 'Cadastro falhou'})
    }
});

router.post('/delete', async (req, res)=>{
    try{
        const user = await User.deleteMany();
        return res.send({user});
    }catch(err){
        res.status(400).send({error: 'Remover falhou'})
    }
});

router.get('/', async (req, res)=>{
    try{
        const users = await User.find();
        return res.send({users});
    }catch(err){
        res.status(400).send({error: 'Get falhou'})
    }
});
router.get('/:user?', async (req, res)=>{
    try{
        const users = await User.findOne({"login":`${req.params.user}`});
        return res.send({users});
    }catch(err){
        res.status(400).send({error: 'Get falhou'})
    }
});

router.post('/fav/:user?&:movie?', async (req, res)=>{
    try{
        const users = await User.updateOne({"login":`${req.params.user}`},{$push:{"favorites":`${req.params.movie}`}});
        return res.send({users, movies});
    }catch(err){
        res.status(400).send({error: 'Update falhou'})
    }
});

router.post('/add/:user?&:friend?', async (req, res)=>{
    try{
        const users = await User.updateOne({"login":`${req.params.user}`},{$push:{"friends":`${req.params.friend}`}});
        return res.send({users});
    }catch(err){
        res.status(400).send({error: 'Update falhou'})
    }
});

router.post('/avaliation/:user?&:movie?&:nota?', async (req, res)=>{
    try{
        const users = await User.updateOne({"login":`${req.params.user}`},{$push:{"avaliations":{"movie":`${req.params.movie}`, "nota":`${req.params.nota}`}}});
        return res.send({users});
    }catch(err){
        res.status(400).send({error: 'Update falhou'})
    }
});

module.exports = app => app.use('/user', router);