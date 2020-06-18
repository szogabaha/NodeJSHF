/*
  Gets the data of a Field.
*/
const requireOption = require('../requireOption');
module.exports = function (objectrepository){
const Field = requireOption(objectrepository, 'Field');
  return function (req,res,next){
    Field.findOne({_id:req.params.fieldID},(err,field) =>{
      if(err|| !field){
          return next(err);
      }

     res.locals.field = field;
     return next();

   });
};
};
