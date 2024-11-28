require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const connectToDB = require("./config/connectdb");
const app = express();
const port = process.env.PORT || 7777;
const globalError = require("./middlewares/error.middleware");
const ApiError = require("./utils/apiError");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiting = require("express-rate-limit");
const helmet = require("helmet");
const hpp = require("hpp");



// ** connect to database
connectToDB();

//**  Middleware to validate the input data
app.use(express.json());

//** Prevent XSS(Cross Site Scripting) Attacks
app.use(xss());

//** Rate Limiting
app.use(
  rateLimiting({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 200,
  })
);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`mode : ${process.env.NODE_ENV}`);
}

//** Security Headers (helmet)
app.use(helmet());

//** Prevent Http Param Pollution
app.use(hpp());


//** cors middleware
app.use(cors());

app.use("/api/projects", require("./routes/projects.route"));
app.use("/api/users", require("./routes/users.route"));


app.all("*", (req, res, next) => {
  next(new ApiError(`Can't find this route: ${req.originalUrl}`, 400));
});

//* Global error handling middleware for express
app.use(globalError);
const server = app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});

//* Handle rejection outside express
process.on("unhandledRejection", (err) => {
  console.error(`UnhandledRejection Errors: ${err.name} | ${err.message}`);
  server.close(() => {
    console.error(`Shutting down....`);
    process.exit(1);
  });
});