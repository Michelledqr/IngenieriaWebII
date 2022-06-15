//----------------------------------------- import libraries
const express = require('express');
//----------------------------------------- import modules
const equmarcaSchema = require('../Schemas/equmarca.js');


const router= express.Router();


// ------------- create 'marca'
router.post 
    (   '/equmarca',
        (req, res) => 
        {   const equmarca= equmarcaSchema(req.body);
            equmarca
                .save  ()
                .then  ((data) => res.json(data))
                .catch ((error)=> res.json({ message: error }))
            ;
        }
    ); 

// ------------- get all 'marca'
router.get 
    (   '/equmarca',
        (req, res) => 
        {   equmarcaSchema
                .find  ()
                .then  ((data) => res.json(data))
                .catch ((error)=> res.json({ message: error }))
            ;
        }
    ); 

// ------------- get specific 'marca' by id
router.get 
    (   '/equmarca/:id',
        (req, res) => 
        {   const {id} = req.params;
            equmarcaSchema
                .findById( id)
                .then  ((data) => res.json(data))
                .catch ((error)=> res.json({ message: error }))
            ;
        }
    ); 

// ------------- update specific 'marca' by id
router.put 
    (   '/equmarca/:id',
        (req, res) => 
        {   const {id} = req.params;
            const {nombre, estado, fechaAlta, fechaActu} = req.body;
            equmarcaSchema
                .updateOne( {_id: id}, {$set: {nombre, estado, fechaAlta, fechaActu}})
                .then  ((data) => res.json(data))
                .catch ((error)=> res.json({ message: error }))
            ;
        }
    ); 

// ------------- delete specific 'marca' by id
router.delete 
    (   '/equmarca/:id',
        (req, res) => 
        {   const {id} = req.params;
            equmarcaSchema
                .deleteOne( {_id: id})
                .then  ((data) => res.json(data))
                .catch ((error)=> res.json({ message: error }))
            ;
        }
    ); 



module.exports=router;
