/*
  Gets the data of a Mushroom.
*/
const requireOption = require('../requireOption');
module.exports = function (objectrepository){
const Mushroom = requireOption(objectrepository, 'Mushroom');
  return function (req,res,next){
    Mushroom.findOne({_id:req.params.mushroomID},(err,mushroom) =>{
      if(err|| !mushroom){
          return next(err);
      }

     res.locals.mushroom = mushroom;
     return next();

   });
};
};
