require('dotenv').config(); // For loading environment variables

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const classController = require('./controllers/classController.js');


// Backend server code
const app = express();
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URL);


// Enable CORS
app.use(cors());
app.use(express.json()); //Body-parser for JSON


app.get('/classes', classController.getClasses);
app.post('/classes', classController.addClass);
app.put('/classes/:id', classController.updateClassById);
app.delete('/classes/:id', classController.deleteClassById);

app.listen(PORT, () => console.log('Server is running on port 3000'));
