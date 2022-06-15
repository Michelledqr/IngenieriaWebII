//----------------------------- import libraries
const mongoose = require('mongoose');



const userSchema = mongoose.Schema
(   {   nombre:     {   type: String,
                        required: true
                    },
        email:      {   type: String,
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
                    }
    }
);

module.exports= mongoose.model('user',userSchema);
