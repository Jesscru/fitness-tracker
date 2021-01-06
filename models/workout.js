const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  workouts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Workout"
    }
  ]
});

const Workout = mongoose.model("Workouts", WorkoutSchema);

module.exports = Workout;
