const express = require("express");
const app = express();

//security packages
const cors = require('cors');
const xss = require('xss-clean');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');



// Routers
const processRouter = require("./routes/processRoutes");


// Errors
const AppError = require("./utilies/AppError");
const globalErrorHandler = require("./controllers/errorController");
const initializeCounter = require("./models/initializeCounter");

app.use(cors({
    credentials: 'include',
    origin: '*'
}));

app.use(express.json({ limit: '10kb' }));
// Initialize Counter For Id Sequence
// initializeCounter()

app.use((req, res, next) => {
    console.log("hello from middleware");
    next();
});

// Data sanitization against NoSQL query injection
// app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
    hpp(
        //   {
        //   whitelist: ['duration'], // declare here all witelisted feild
        // }
    )
);


//Routes
app.use("/api/v1/process", processRouter);


app.all("*", (req, res, next) => {
    next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;