const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const categoryRouter = require("./routes/categoryRouter");
const transactionRouter = require("./routes/transactionRouter");

const app = express();

//! Connect to mongodb
mongoose
  .connect(
    "mongodb+srv://rishikamehta2004:rishu2004@cluster0.1yrcnpc.mongodb.net/mern-expenses"
  )
  .then(() => console.log("DB connected"))
  .catch((e) => console.log(e));

//! Cors configuration

const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));
//!Middlewares

app.use(express.json()); //? Pass the incoming json data

//!Router

app.use("/", userRouter);
app.use("/", categoryRouter);
app.use("/", transactionRouter);

//!Error

app.use(errorHandler);

//! START THE SERVER
//in production we have to use the port from our deployment server
const PORT = process.env.PORT || 8082;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
