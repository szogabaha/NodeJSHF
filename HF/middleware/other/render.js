/*
  Renders the values into the template.
*/

module.exports = function (objectrepository,viewName){

  return function (req,res,next){
    res.render(viewName,res.tpl);
    return next();
};
};
