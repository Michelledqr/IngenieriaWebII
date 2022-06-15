//----------------------------------------- import libraries
const express = require('express');
//----------------------------------------- import modules
const userSchema = require('../Schemas/user.js');


const router= express.Router();


// ------------- create users
router.post 
    (   '/users',
        (req, res) => 
        {   const user= userSchema(req.body);
            user
                .save  ()
                .then  ((data) => res.json(data))
                .catch ((error)=> res.json({ message: error }))
            ;
        }
    ); 

// ------------- get all users
router.get 
    (   '/users',
        (req, res) => 
        {   userSchema
                .find  ()
                .then  ((data) => res.json(data))
                .catch ((error)=> res.json({ message: error }))
            ;
        }
    ); 

// ------------- get specific user by id
router.get 
    (   '/users/:id',
        (req, res) => 
        {   const {id} = req.params;
            userSchema
                .findById( id)
                .then  ((data) => res.json(data))
                .catch ((error)=> res.json({ message: error }))
            ;
        }
        //(req, res) => {res.send("Create User Message")} - testLine
    ); 

// ------------- update specific user by id
router.put 
    (   '/users/:id',
        (req, res) => 
        {   const {id} = req.params;
            const {nombre, email,estado, fechaAlta, fechaActu} = req.body;
            userSchema
                .updateOne( {_id: id}, {$set: {nombre, email,estado, fechaAlta, fechaActu}})
                .then  ((data) => res.json(data))
                .catch ((error)=> res.json({ message: error }))
            ;
        }
    ); 

// ------------- delete specific user by id
router.delete 
    (   '/users/:id',
        (req, res) => 
        {   const {id} = req.params;
            userSchema
                .deleteOne( {_id: id})
                .then  ((data) => res.json(data))
                .catch ((error)=> res.json({ message: error }))
            ;
        }
    ); 



module.exports=router;
