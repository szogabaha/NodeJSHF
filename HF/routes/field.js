var addField= require('../middleware/field/addField')
var getField = require('../middleware/field/getField')
var getFields = require('../middleware/field/getFields')
var render = require('../middleware/other/render')


const Field =require('../models/field');
module.exports = function (app) {
let bttn=false;
    var objectRepository = {
      Field: Field,
    };

    /*Lists all Fields with the description of a Field, targeted (but not clicked) by the cursor*/
    app.get('/',
    getFields(objectRepository),
    getField(objectRepository),
    render(objectRepository,'index'),
    );
    app.post('/',
    getFields(objectRepository),
    addField(objectRepository),
    render(objectRepository,'index')
    );
    app.get('/:fieldID',
    getFields(objectRepository),
    addField(objectRepository),
    getField(objectRepository),
    render(objectRepository,'index'),
    );
    app.post('/:fieldID',
    getFields(objectRepository),
    addField(objectRepository),
    getField(objectRepository),
    render(objectRepository,'index')
    );
};
