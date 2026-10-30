const express = require("express");
const app = express();
const PORT = 8000;
const path = require("node:path");


app.get("/", (req, res) => res.status(200));

app.listen(PORT, (error) => {
    if (error){
        throw error;
    }
    console.log("Test");
});