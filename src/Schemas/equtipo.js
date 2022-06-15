//----------------------------- import libraries
const mongoose = require('mongoose');



const equtipoSchema = mongoose.Schema
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

module.exports= mongoose.model('equtipo',equtipoSchema);
