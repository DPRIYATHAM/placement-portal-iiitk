const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
require('./cooking.js');

const connectToMongoDB = require('./src/db/db.js');

const authRoutes = require('./src/routes/authRoutes.js');
const studentroute = require('./src/routes/student/studentroute.js');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/student",studentroute);




// app.get('/', (req, res) => {
//     res.send('Hello World!');
//     }
// );



app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on http://localhost:${PORT}`);
    }
);
