const express = require("express");
const path = require('path');
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });

// db.Workouts.create({ name: "Workouts" })
//   .then(dbWorkouts => {
//     console.log(dbWorkouts);
//   })
//   .catch(({message}) => {
//     console.log(message);
//   });

// app.post("/exercise", ({body}, res) => {
//   db.Workouts.create(body)
//     .then(({_id}) => db.Workouts.findOneAndUpdate({}, { $push: { workouts: _id } }, { new: true }))
//     .then(dbWorkouts => {
//       res.json(dbWorkouts);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/stats", (req, res) => {
//   db.Workouts.find({})
//     .then(dbWorkouts => {
//       res.json(dbWorkouts);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/workouts", (req, res) => {
//   db.Workouts.find({})
//     .then(dbWorkouts => {
//       res.json(dbWorkouts);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/exercise", (req, res) => {
//   db.Workouts.find({})
//     .populate("workouts")
//     .then(dbWorkouts => {
//       res.json(dbWorkouts);
//     })
//     .catch(err => { 
//       res.json(err);
//     });
// });


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});