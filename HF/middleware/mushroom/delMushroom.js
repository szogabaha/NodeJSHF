/*
  Deletes a Mushroom from the list of Mushrooms
*/
const requireOption= require('../requireOption');
module.exports = function (objectrepository){

  return function (req,res,next){
    if (typeof res.locals.mushroom==='undefined'){
      console.log("deleted");
      return next();
    }
    res.locals.mushroom.remove(err=>{
      if(err){
        return next(err);
      }

      return res.redirect('/'+res.locals.field._id+"/mushrooms");
    });
};
};
