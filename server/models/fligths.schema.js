const mongoose = require("mongoose");

const  fligthSchema = new mongoose.Schema({
  fligthnum: {
    type: String,
    require: true,
  },
 Origin: {
    type: String,
    require: true,
  },
  destenation: {
    type: String,
    require: true,
  },depart: {
    type: String,
    require: true,
  },Arrives: {
    type: String,
    require: true,
  },OPERATOR: {
    type: String,
    require: true,
  },Acronymsd: {
    type: String,
    require: true,
  },Acronymso: {
    type: String,
    require: true,
  },PNR: {
    type: String,
    require: true,
  },passengers:[]
});

const Fligth = mongoose.model("Fligth", fligthSchema);
module.exports = Fligth;

