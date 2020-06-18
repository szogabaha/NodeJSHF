/*
  Gets the list of Mushrooms stored.
*/
const requireOption = require('../requireOption');
module.exports = function (objectrepository){
  const Mushroom= requireOption(objectrepository,'Mushroom');

  return function(req, res, next) {

        Mushroom.find({}, (err, mushrooms) => {

            if (err) {

                return next(err);

            }



            res.locals.mushrooms = mushrooms;

            return next();

        });
    };
};
