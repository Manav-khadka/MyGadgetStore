const express = require('express');
const app = express();

const errorMiddleware = require('./middleware/error');

app.use(express.json());
//route  imports

const product =require('./routes/productRoutes');
app.use("/api/v1",product);



//Middleware to handle errors
app.use(errorMiddleware);


module.exports =app