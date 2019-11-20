const express = require('express');
const cassandra = require('../config/cassandra');
const router = express.Router();

router.get('/:user?', async (req, res)=>{    
    try{
        const users = await cassandra.execute("select * from atividade where user=?", [req.params.user]);
        return res.send({users});
    }catch(err){
        res.status(400).send({error: 'Get falhou'})
    }
});

router.get('/friends/:user?', async (req, res)=>{    
    try{
        const users = await cassandra.execute("select * from atividade where user=?", [req.params.user]);
        return res.send({users});
    }catch(err){
        res.status(400).send({error: 'Get falhou'})
    }
});

module.exports = app => app.use('/feed', router);