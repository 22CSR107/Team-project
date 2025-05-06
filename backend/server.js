const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/').
then(()=> console.log('server connected'))
.catch((err) => console.log("server connection error",err));

const studentRoute = require('./routes/student.route.js');
app.use('/api',studentRoute);


const PORT = 5000;
app.listen(PORT, () => {
    console.log('app is listening in  port no : ' + PORT);
});




