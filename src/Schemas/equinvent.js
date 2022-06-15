//----------------------------- import libraries
const mongoose = require('mongoose');



const equinventSchema = mongoose.Schema
(   {   serial:     {   type: String,
                        required: true
                    },
        modelo:     {   type: String,
                        required: true
                    },                
        descrip:    {   type: String,
                        required: false
                    },
        urlImagen:  {   type: String,
                        required: false
                    },
        color:      {   type: String,
                        required: true
                    },
        fechaAlta:  {   type: Date,
                        required: true
                    },                
        precio:     {   type: Number,
                        required: false
                    },
        usuCargo:   {   type: String,
                        required: false
                    },
        marca:      {   type: String,
                        required: true
                    },                
        equEstado:  {   type: String,
                        required: false
                    },
        equTipo:    {   type: String,
                        required: false
                    }
    }
);

module.exports= mongoose.model('equinvent',equinventSchema);
