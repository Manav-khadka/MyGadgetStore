const express = require('express');
const app = express();

const errorMiddleware = require('./middleware/error');

app.use(express.json());
//route  imports

const productRoute =require('./routes/productRoutes');
const userRoute =require('./routes/userRoutes');
app.use("/api/v1",productRoute);
app.use("/api/v1",userRoute);



//Middleware to handle errors
app.use(errorMiddleware);


module.exports =app