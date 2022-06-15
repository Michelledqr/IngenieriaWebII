//----------------------------- import libraries
const mongoose = require('mongoose');



const equestadoSchema = mongoose.Schema
(   {   nombre:     {   type: String,
                        required: true
                    },
        estado:     {   type: Boolean,
                        required: true
                    },                
        fechaAlta:  {   type: Date,
                        required: false
                    },
        fechaActu:  {   type: Date,
                        required: false
                    },
    }
);

module.exports= mongoose.model('equestado',equestadoSchema);
