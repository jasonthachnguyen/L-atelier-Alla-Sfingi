const express = require("express");
const app = express();
const PORT = 3000;
const path = require("node:path");
const storeData = require("./storage.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true}));

app.get("/", (req, res) => res.render("index.ejs"));
app.post("/formTest", (req, res) => {
    const dataObject = req.body;
    storeData(dataObject);
    res.send("I'm a gooddddddd");
})

app.listen(PORT, (error) => {
    if (error){
        throw error;
    }
    console.log("Test");
});