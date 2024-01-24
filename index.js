const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authorRoute =require("./routes/author");
const bookRoute =require("./routes/book");
dotenv.config();


//CONNEC TDATABASE
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log(err);
});


app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));

//ROUTES
//author
app.use("/v1/author",authorRoute);

//book
app.use("/v1/book",bookRoute);

app.listen("8000",()=>{
    console.log("Server is running...");
});

