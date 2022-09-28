const mongoose = require('mongoose');




const connectDatabase = () => {
    mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) => {
        console.log(`Database connected with server : ${data.connection.host}`);
    }).catch((err) => {
        console.log(err);
    })

}
module.exports = connectDatabase