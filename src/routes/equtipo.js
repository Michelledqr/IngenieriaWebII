//----------------------------------------- import libraries
const express = require('express');
//----------------------------------------- import modules
const equtipoSchema = require('../Schemas/equtipo.js');


const router= express.Router();


// ------------- create 'tipo'
router.post 
    (   '/equtipos',
        (req, res) => 
        {   const user= equtipoSchema(req.body);
            user
                .save  ()
                .then  ((data) => res.json(data))
                .catch ((error)=> res.json({ message: error }))
            ;
        }
    ); 

// ------------- get all 'tipo'
router.get 
    (   '/equtipos',
        (req, res) => 
        {   equtipoSchema
                .find  ()
                .then  ((data) => res.json(data))
                .catch ((error)=> res.json({ message: error }))
            ;
        }
    ); 

// ------------- get specific 'tipo' by id
router.get 
    (   '/equtipos/:id',
        (req, res) => 
        {   const {id} = req.params;
            equtipoSchema
                .findById( id)
                .then  ((data) => res.json(data))
                .catch ((error)=> res.json({ message: error }))
            ;
        }
    ); 

// ------------- update specific 'tipo' by id
router.put 
    (   '/equtipos/:id',
        (req, res) => 
        {   const {id} = req.params;
            const {nombre, estado, fechaAlta, fechaActu} = req.body;
            equtipoSchema
                .updateOne( {_id: id}, {$set: {nombre, estado, fechaAlta, fechaActu}})
                .then  ((data) => res.json(data))
                .catch ((error)=> res.json({ message: error }))
            ;
        }
    ); 

// ------------- delete specific 'tipo' by id
router.delete 
    (   '/equtipos/:id',
        (req, res) => 
        {   const {id} = req.params;
            equtipoSchema
                .deleteOne( {_id: id})
                .then  ((data) => res.json(data))
                .catch ((error)=> res.json({ message: error }))
            ;
        }
    ); 

module.exports=router;
