const mongoose = require('mongoose');
const Class = require('../models/Class'); // Update with the actual path to your Class model
require('dotenv').config('../');

mongoose.connect(process.env.MONGO_URL);

const dummyData = [
  { name: "Morning Yoga", trainer: "Alice Johnson", category: "Yoga", duration: 60, capacity: 20 },
  { name: "Cardio Blast", trainer: "Michael Smith", category: "Cardio", duration: 45, capacity: 25 },
  { name: "Strength Training 101", trainer: "John Doe", category: "Strength Training", duration: 50, capacity: 15 },
  { name: "Evening Yoga", trainer: "Emma Brown", category: "Yoga", duration: 60, capacity: 18 },
  { name: "HIIT Session", trainer: "Chris Wilson", category: "Cardio", duration: 40, capacity: 20 },
  { name: "Pilates Beginner", trainer: "Sophia Garcia", category: "Pilates", duration: 55, capacity: 12 },
  { name: "Advanced Strength Training", trainer: "James Taylor", category: "Strength Training", duration: 70, capacity: 10 },
  { name: "Weekend Yoga Retreat", trainer: "Linda Martinez", category: "Yoga", duration: 120, capacity: 30 },
  { name: "Zumba Dance", trainer: "Nancy Lee", category: "Cardio", duration: 50, capacity: 25 },
  { name: "Core Strength Bootcamp", trainer: "Robert Green", category: "Strength Training", duration: 45, capacity: 20 }
];

Class.insertMany(dummyData)
  .then(() => {
    console.log("Dummy data inserted successfully!");
    mongoose.connection.close();
  })
  .catch(err => {
    console.error("Error inserting dummy data:", err);
    mongoose.connection.close();
  });
