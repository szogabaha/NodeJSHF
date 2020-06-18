const Schema = require('mongoose').Schema;

const db = require('../config/db');



const Field = db.model('Field', {

    name: String,

    description: String
    /*_mushrooms:[ {

        type: Schema.Types.ObjectId,

        ref: 'Mushroom'

    }]*/

});



module.exports = Field;
