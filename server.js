const express = require('express');
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

const contactRoutes = require("./routes/contactRoutes");

app.use("/api", contactRoutes);

app.listen(port, () => {
    console.log(`App running on ${port} port`);
});