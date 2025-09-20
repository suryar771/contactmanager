const express = require('express');
const dotenv = require("dotenv").config();
const connectDB = require("./config/dbConnection");
const contactRoutes = require("./routes/contactRoutes");
const userRoutes = require("./routes/userRoutes");


const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use("/api/contacts", contactRoutes);
app.use("/api/users",userRoutes);


app.listen(port, () => {
    console.log(`App running on ${port} port`);
});