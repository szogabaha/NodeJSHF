/*
  Adds a new Mushroom to the list of Mushrooms stored
*/
const requireOption = require('../requireOption');
module.exports = function (objectrepository){
  const Mushroom = requireOption(objectrepository,'Mushroom');
  return function (req,res,next){
    if (
            typeof req.body.eName === 'undefined' ||
            typeof req.body.eDuration === 'undefined' ||
            typeof req.body.eColour ==='undefined'
        ) {
            return next();

        }
    if(
      typeof req.body.eName!=='undefined'&&(
      req.body.eName ==='' ||
      req.body.eDuration===''||
      req.body.eColour==='')){
        res.locals.errormsg="You may not leave any fields empty!";
        return next();
      }
    if(typeof res.locals.mushroom==='undefined'){
      res.locals.mushroom = new Mushroom();
    }

    res.locals.mushroom.name=req.body.eName;
    res.locals.mushroom.colour=req.body.eColour;
    res.locals.mushroom.duration=req.body.eDuration;
    if(typeof req.body.eSuggest!=='undefined'){ res.locals.mushroom.suggested='yes';
    }else{
       res.locals.mushroom.suggested='no';
    }
    res.locals.mushroom._location=res.locals.field;

    res.locals.mushroom.save(err=>{
      if(err){
        return next(err);
      }
    return res.redirect('/'+res.locals.field._id+"/mushrooms/"+res.locals.mushroom._id);
    });
};
};
