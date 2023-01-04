const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose")
const passport = require("passport");

const passengerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String
  },
  name: {
    type: String,
    // unique: true,
   default:"",
  },
  lastName: {
    type: String,
   default:"",
  },
  city: {
    type: String,

   default:"",
  },
  country: {
    type: String,
   default:"",
  },
  hobbies: {
    type: String,
    default:""
  },
  launguges: {
    type: String,
   default:"",
  },
  occupation: {
    type: String,
    default:""
  },
  education: {
    type: String,
    default:""
  },
  smoker: {
    type: Boolean,
  },
  pets: {
    type: Boolean,
  },
  kids: {
    type: Boolean,
  },
  sports: {
    type: Boolean,
  },
mates: {
    type: Array,
  },
});

passengerSchema.plugin(passportLocalMongoose);
const Passenger = mongoose.model("Passenger", passengerSchema);

passport.use(Passenger.createStrategy());

passport.serializeUser(Passenger.serializeUser());
passport.deserializeUser(Passenger.deserializeUser());
module.exports = Passenger;


