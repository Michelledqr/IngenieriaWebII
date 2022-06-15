//----------------------------------------- import libraries
const express = require('express');
//----------------------------------------- import modules
const equinventSchema = require('../Schemas/equinvent.js');


const router= express.Router();


// ------------- create 'invent'
router.post 
    (   '/equinvent',
        (req, res) => 
        {   const equinvent= equinventSchema(req.body);
            equinvent
                .save  ()
                .then  ((data) => res.json(data))
                .catch ((error)=> res.json({ message: error }))
            ;
        }
    ); 

// ------------- get all 'invent'
router.get 
    (   '/equinvent',
        (req, res) => 
        {   equinventSchema
                .find  ()
                .then  ((data) => res.json(data))
                .catch ((error)=> res.json({ message: error }))
            ;
        }
    ); 

// ------------- get specific 'invent' by id
router.get 
    (   '/equinvent/:id',
        (req, res) => 
        {   const {id} = req.params;
            equinventSchema
                .findById( id)
                .then  ((data) => res.json(data))
                .catch ((error)=> res.json({ message: error }))
            ;
        }
    ); 

// ------------- update specific 'invent' by id
router.put 
    (   '/equinvent/:id',
        (req, res) => 
        {   const {id} = req.params;
            const {serial, modelo, descrip, urlImagen, color, fechaAlta, precio, usuCargo, marca, equEstado, equTipo } = req.body;
            equinventSchema
                .updateOne( {_id: id}, {$set: {serial, modelo, descrip, urlImagen, color, fechaAlta, precio, usuCargo, marca, equEstado, equTipo}})
                .then  ((data) => res.json(data))
                .catch ((error)=> res.json({ message: error }))
            ;
        }
    ); 

// ------------- delete specific 'invent' by id
router.delete 
    (   '/equinvent/:id',
        (req, res) => 
        {   const {id} = req.params;
            equinventSchema
                .deleteOne( {_id: id})
                .then  ((data) => res.json(data))
                .catch ((error)=> res.json({ message: error }))
            ;
        }
    ); 



module.exports=router;
