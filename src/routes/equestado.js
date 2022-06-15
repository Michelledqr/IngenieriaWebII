//----------------------------------------- import libraries
const express = require('express');
//----------------------------------------- import modules
const equestadoSchema = require('../Schemas/equestado.js');


const router= express.Router();


// ------------- create 'estado'
router.post 
    (   '/equestado',
        (req, res) => 
        {   const equestado= equestadoSchema(req.body);
            equestado
                .save  ()
                .then  ((data) => res.json(data))
                .catch ((error)=> res.json({ message: error }))
            ;
        }
    ); 

// ------------- get all 'estado'
router.get 
    (   '/equestado',
        (req, res) => 
        {   equestadoSchema
                .find  ()
                .then  ((data) => res.json(data))
                .catch ((error)=> res.json({ message: error }))
            ;
        }
    ); 

// ------------- get specific 'estado' by id
router.get 
    (   '/equestado/:id',
        (req, res) => 
        {   const {id} = req.params;
            equestadoSchema
                .findById( id)
                .then  ((data) => res.json(data))
                .catch ((error)=> res.json({ message: error }))
            ;
        }
    ); 

// ------------- update specific 'estado' by id
router.put 
    (   '/equestado/:id',
        (req, res) => 
        {   const {id} = req.params;
            const {nombre, estado, fechaAlta, fechaActu} = req.body;
            equestadoSchema
                .updateOne( {_id: id}, {$set: {nombre, estado, fechaAlta, fechaActu}})
                .then  ((data) => res.json(data))
                .catch ((error)=> res.json({ message: error }))
            ;
        }
    ); 

// ------------- delete specific 'estado' by id
router.delete 
    (   '/equestado/:id',
        (req, res) => 
        {   const {id} = req.params;
            equestadoSchema
                .deleteOne( {_id: id})
                .then  ((data) => res.json(data))
                .catch ((error)=> res.json({ message: error }))
            ;
        }
    ); 



module.exports=router;
