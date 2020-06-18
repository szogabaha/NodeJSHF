
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/paddyk', { useNewUrlParser: true,useUnifiedTopology: true }/*, function (err, db) {
  console.log("couldn't connect to db");
}*/);

module.exports = mongoose;
