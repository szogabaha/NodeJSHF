var addMushroom = require('../middleware/mushroom/addMushroom')
var delMushroom = require('../middleware/mushroom/delMushroom')
var getMushroom = require('../middleware/mushroom/getMushroom')
var getMushrooms = require('../middleware/mushroom/getMushrooms')

var getField = require('../middleware/field/getField')

var render = require('../middleware/other/render')

const Mushroom =require('../models/mushroom');
const Field =require('../models/field');
module.exports = function (app) {

  var objectRepository = {
    Mushroom: Mushroom,
    Field: Field
  };





    //adds a new mushroom to the specified FIeld
    app.use('/:fieldID/new/mushroom',
        getField(objectRepository),
        addMushroom(objectRepository),
        render(objectRepository,'editor')
    );


    /*Creates a new mushroom  (editing a mushroom means deleting and creating a new one so this includes editing)*/
    app.use('/:fieldID/:mushroomID/edit',
      getField(objectRepository),
      getMushroom(objectRepository),
      addMushroom(objectRepository),
      render(objectRepository,'editor'),
    );
    /*Deletes a specified mushroom*/
    app.use('/:fieldID/:mushroomID/delete',
      getField(objectRepository),
      getMushrooms(objectRepository),
      getMushroom(objectRepository),
      delMushroom(objectRepository),
      render(objectRepository,'mushrooms')
    );

    /*Lists all mushrooms of a field and the description of a specified mushroom (mushrooms.html)*/
    app.get('/:fieldID/mushrooms',
      getMushrooms(objectRepository),
      getField(objectRepository),
      render(objectRepository,'mushrooms')
    );

    app.get('/:fieldID/mushrooms/:mushroomID',
      getMushroom(objectRepository),
      getMushrooms(objectRepository),
      getField(objectRepository),
      render(objectRepository,'mushrooms')
    );
};
