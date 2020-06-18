/*
  Adds a new Field to the list of Fields stored
*/
const requireOption = require('../requireOption');
module.exports = function (objectrepository){
  const Field = requireOption(objectrepository,'Field');

  return function (req,res,next){
    if (
            typeof req.body.inputName === 'undefined' ||
            typeof req.body.inputDesc === 'undefined'
        ) {
            return next();
        }
    if(
      req.body.inputname===""||
      req.body.inputDesc===""
    ){
          res.locals.fielderror="inappropriate values!";
          return next();
    }
    res.locals.Field = new Field();
    res.locals.Field.name=req.body.inputName;
    res.locals.Field.description=req.body.inputDesc;
    res.locals.Field.save(err=>{
      if(err){
        return next(err);
      }
    return res.redirect('/');
    });
};
};
