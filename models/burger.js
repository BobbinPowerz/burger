//importing orm module to connect with database
var orm = require("../config/orm.js");
var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  create: function(cols, burger_name, cb) {
    orm.insertOne("burgers", burger_name, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};
//exporting our server functionality to work with controller functions
module.exports = burger;