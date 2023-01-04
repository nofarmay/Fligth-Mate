const express = require("express");
const app = express();
app.use(express.json());
const server = require("http").createServer(app);
// const io = require("socket.io")(server);
// const { Server } = require("socket.io");
require("./data/mongoose.js");
const Passenger = require("./models/passenger.schema.js");
const Fligth = require("./models/fligths.schema.js");
const cors = require("cors");

const port = process.env.PORT || 5000;

// --------------AUTHENTICATION--------------
const session = require("express-session");
const passport = require("passport");
app.use(cors({ origin: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    // cookie: { secure: true },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//     credentials: true,
//   },
// });

// let users = {}
// io.on("connection", (socket) => {
//   console.log("Hello from the Server! Socket ID ");
// });

// socket.on("newMessage", newMessage => {
//   // console.log(("Just arrived from the server: ",newMessage));
// io.to(newMessage.room).emit("newMessage", { name: newMessage.name, msg: newMessage.msg})
// })

// socket.on("roomEntered", ({oldRoom, newRoom}) => {
//   socket.leave(oldRoom)
//   io.to(oldRoom).emit("newMessage", {name: "NEWS", msg: `${users[socket.id]} just left "${oldRoom}"`})
//   io.to(newRoom).emit("newMessage", {name: "NEWS", msg: `${users[socket.id]} just joined "${newRoom}"`})
//   socket.join(room)

// })

// socket.on("disconnect",() => {
//   // users = users.filter(user => user !== socket.id)
//   io.emit("userList",users)
//   console.log("Users after disconnection: " +users);
// })
// })

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// homepage
app.get("/", (req, res) => {
  res.send("Hello mate");
});

// USERS CRUD
// get all passengers
app.get("/passengers", (req, res) => {
  Passenger.find({})
    .then((passengers) => {
      res.send(passengers);
      console.log(passengers);
    })
    .catch((e) => {
      res.status(500).send("could not find passengers");
    });
});

// get passenger by id
app.get("/passengers/:passengerId", (req, res) => {
  const _id = req.params.passengerId;
  console.log(req.params);

  Passenger.findById(_id)
    .then((passenger) => {
      if (!passenger) {
        return res.status(404).send("passenger not exist");
      }
      res.send(passenger);
    })
    .catch((e) => {
      res.status(500).send("passenger not found");
    });
});

// register passenger by id
app.post("/passengers/register", (req, res) => {
  // console.log(req.body);
  const { password, username, name } = req.body;
  Passenger.register({ username, name }, password, (err, user) => {
    if (err) {
      console.log(err.message);
      return res.status(404).send(err.message);
    } else {
      passport.authenticate("local")(req, res, () => {});
    }
    Passenger.findOne({ username })
      .then((result) => res.send(result))
      .catch((e) => console.log(e));
  });
});

//providing username and password only in body
app.post("/passengers/login", async (req, res) => {
  const { username } = req.body;
  try {
    const user = new Passenger(req.body);
    req.login(user, (err) => {
      if (err) throw Error(err);
      passport.authenticate("local")(req, res, (error) => {
        if (error) {
          throw Error(error);
        }
      });
    });
    res.send(await Passenger.findOne({ username }));
  } catch (e) {
    res.status(404).send(e);
  }
});

// delete passenger by id
app.delete("/passengers/:id", async (req, res) => {
  try {
    const passenger = await Passenger.findByIdAndDelete(req.params.id);

    if (!passenger) {
      res.status(404).send();
    }

    res.send(passenger);
  } catch (e) {
    res.status(500).send();
  }
});

// update passenger profile by id
app.patch("/passengers/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "name",
    "lastName",
    "city",
    "country",
    "smoker",
    "hobbies",
    "launguges",
    "pets",
    "education",
    "hobbies",
    "occupation",
    "kids",
    "sports",
    "mates",
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid update!" });
  }

  try {
    const passenger = await Passenger.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!passenger) {
      return res.status(404).send();
    }

    res.send(passenger);
  } catch (e) {
    res.status(400).send(e);
  }
});

// ----------------------------------------
// FLIGTHS CRUD (ADMIN)

// searchfligth
app.get("/findfligth/:fligthnum", (req, res) => {
  const _id = req.params.fligthnum;
  Fligth.findById(_id)
    .then((fligth) => {
      if (!fligth) {
        return res.status(404).send("fligth not exist");
      }
      res.send(fligth);
    })
    .catch((e) => {
      res.status(500).send("fligth not fount");
    });
});
//  future&pastfligth
//  future
app.get("/fligths/future", (req, res) => {
  Fligth.find({})
    .then((passengers) => {
      res.send(passengers);
      console.log(passengers);
    })
    .catch((e) => {
      res.status(500).send("could not find future fligths");
    });
});

// past
app.get("/fligths/", (req, res) => {
  Fligth.find({})
    .then((fligths) => {
      res.send(fligths);
      console.log(fligths);
    })
    .catch((e) => {
      res.status(500).send(e, "could not find past fligths");
    });
});

app.post("/fligth", (req, res) => {
  const fligth = new Fligth(req.body);
  fligth
    .save()
    .then(() => {
      res.status(201).send(fligth);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

// -----------------------
// admin
// admin update a fligth (delay/weather ptoblems/heavy clouds the passengers may feel )
// make sure he is the only one that can do it & add the relevant update to the scheme with access to admin only

// app.patch('/fligth/:id',async (req,res) => {
//   const updates = Object.keys(req.body)
//   const allowedUpdates = ['isActive','name', ,'description','Price','images'  ]
//   const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//   if(!isValidOperation) {
//       return res.status(400).send({error:'Invalid update!'})
//   }

//   try{
//       const fligth = await Fligth.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

//       if (!fligth) {
//           return res.status(404).send()
//       }

//       res.send(fligth)
//   } catch (e) {
//       res.status(400).send(e)
//   }
// })

app.post("/fligths/passenger", async (req, res) => {
  try {
    const fligth = await Fligth.findById(req.body.fligthId);
    fligth.passengers.push(req.body.userId);
    console.log(req.body.userId);
    console.log(fligth.passengers);
    await fligth.save();
    res.send("!");
  } catch (e) {
    console.log(e);
  }
});

// delete fligth by id
app.delete("/fligths/:id", async (req, res) => {
  try {
    const fligth = await Fligth.findByIdAndDelete(req.params.id);

    if (!fligth) {
      res.status(404).send("fligth not found");
    }

    res.send(fligth);
  } catch (e) {
    res.status(500).send("can not delete fligth");
  }
});

//delete all passengers
app.delete("/delete/passengers", async (req, res) => {
  try {
    const passenger = await passenger.deleteMany({});

    if (!passenger) {
      res.status(404).send();
    }

    res.send(passenger);
  } catch (e) {
    res.status(500).send();
  }
});
