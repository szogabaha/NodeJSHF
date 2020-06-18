/*
  Gets the list of Fields stored.
*/
const requireOption = require('../requireOption');
module.exports = function (objectrepository){
  const Field = requireOption(objectrepository, 'Field');

  return function(req, res, next) {
        Field.find({}, (err, fields) => {

            if (err) {

                return next(err);

            }



            res.locals.fields = fields;

            return next();

        });
    };
};
