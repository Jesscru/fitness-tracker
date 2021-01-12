var db = require("../models");

// Routes
module.exports = function(app) {

  // GET route for getting all of the excercises
  app.get("/api/exercises", function(req, res) {
    db.Workout.find({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });


   // PUT route for adding exercises
   app.post("/api/workouts/add", function(req, res) {
    db.Workout.create(body)
    .then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: { workouts: _id } }, { new: true }))
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
   });

  // GET route for getting all of the excercises
  app.get("/api/workouts/range", function(req, res) {
    db.Workout.find({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

//   // Get route for retrieving a single post
//   app.get("/api/posts/:id", function(req, res) {
//     db.Post.findOne({
//       where: {
//         id: req.params.id
//       }
//     })
//       .then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });

//   // POST route for saving a new post
//   app.post("/api/posts", function(req, res) {
//     console.log(req.body);
//     db.Workout.create({
//       title: req.body.title,
//       body: req.body.body,
//       category: req.body.category
//     })
//       .then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });

//   // DELETE route for deleting posts
//   app.delete("/api/posts/:id", function(req, res) {
//     db.Post.destroy({
//       where: {
//         id: req.params.id
//       }
//     })
//       .then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });

 
};
