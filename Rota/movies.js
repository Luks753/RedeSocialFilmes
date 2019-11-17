const express = require('express')
const Movie = require('../db_apis/movies')
const router = express.Router();

router.get('/', async (req, res)=>{
    try{
        const movies = await Movie.find();
        return res.send({movies});
    }catch(err){
        res.status(400).send({error: 'Cadastro falhou'})
    }
});

router.get('/:movie?', async (req, res)=>{
    try{
        const movies = await Movie.findOne({"movie_title":`${req.params.movie}`});
        return res.send({movies});
    }catch(err){
        res.status(400).send({error: 'Cadastro falhou'})
    }
});

module.exports = app => app.use('/movie', router);