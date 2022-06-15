//------------------------------- import libraries
require("dotenv").config();             
const express = require('express');
const mongoose = require('mongoose');

//------------------------------- import modules
const userRoutes = require('./routes/user');
const tipoRoutes = require('./routes/equtipo');
const marcaRoutes = require('./routes/equmarca');
const estadoRoutes = require('./routes/equestado');
const inventRoutes = require('./routes/equinvent');



//-------------- activating local server 
const app = express();
const port= 9000 || process.env.port;

app.listen(port,() => console.log('server listenig on port ',port));

//--------------linking to mongodb conection
mongoose
    .connect ( process.env.MONGODB_URI)
    .then    (()=> console.log('Signed up on atlas MogoDB'))
    .catch   ((error)=>console.error(error))
;

//-------------midddleware function
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', tipoRoutes);
app.use('/api', marcaRoutes);
app.use('/api', estadoRoutes);
app.use('/api', inventRoutes);

//-------------routes
app.get
    (   "/",
        (req,res)=>{res.send('Listening test by sending this message');}
    )
;
