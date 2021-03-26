const mongoose = require("mongoose")

// CREATING DATABASE
mongoose.connect("mongodb://localhost:27017/tabudynamic", {
    useCreateIndex: true,
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then( ()=>{
    console.log("CONNECTION SUCESSFUL");
}).catch( (error)=>{
    console.log(error);
})