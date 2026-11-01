const express = require("express");
const cors = require("cors");
const saveOrderToFile = require("./utility/localFileManager");
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => res.status(200).send("hello"));
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