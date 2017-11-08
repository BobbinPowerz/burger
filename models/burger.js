var orm = require("../config/orm.js");
var burger = {
  all: function(cb) {
    orm.all("cats", function(res) {
      cb(res);
    });
  },