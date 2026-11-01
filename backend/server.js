const express = require("express");
const cors = require("cors");
const saveOrderToFile = require("./utility/localFileManager");
const app = express();
const PORT = 8000;
const path = require("node:path");

app.use(express.static(path.join(__dirname, "../frontend/vite-project/dist")))

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get('/*home', (req, res) => res.sendFile(path.join(__dirname,  "../frontend/vite-project/dist/index.html")));
app.post("/submitOrder", (req, res) => {
    const dataObject = req.body;
    console.log(`req body is ${dataObject}`);
    saveOrderToFile(dataObject);
    res.send({ text: "Sent!"});
})

app.listen(PORT, (error) => {
    if (error){
        throw error;
    }
    console.log("Test");
});