const Schema = require('mongoose').Schema;

const db = require('../config/db',);



const Mushroom = db.model('Mushroom', {

    name: String,

    colour: String,

    duration: String,
    suggested: String,

    _location: {

        type: Schema.Types.ObjectId,

        ref: 'Field'

    }

});



module.exports = Mushroom;
