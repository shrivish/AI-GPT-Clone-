const express = require('express');
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require('./config/db');
const errrorHandler = require('./middlewares/errorMiddleware');


//routes path
const authRoutes = require('./routes/authRoutes');
const { OpenAIApi } = require('openai');
//dotenv
dotenv.config();

//mongo connection
connectDB();

//rest objects
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(errrorHandler);

app.set('env', 'development');

const PORT = process.env.PORT || 8080;

//API ROUTES
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/openai", require("./routes/openaiRoutes"));

//listen server
app.listen(PORT, () => {
  console.log(`Server Running in ${process.env.DEV_MODE} mode on port no ${PORT}`.bgCyan
    .white);
});