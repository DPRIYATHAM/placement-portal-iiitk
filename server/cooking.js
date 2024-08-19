// similar to app.js. used to manage routes and middleware.

const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(cookieParser());


const authRoutes = require('./src/routes/authRoutes.js');
const studentroute = require('./src/routes/student/studentroute.js');



app.use("/api/auth",authRoutes);
app.use("/api/student",studentroute);











