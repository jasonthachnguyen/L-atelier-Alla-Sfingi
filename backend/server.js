const express = require("express");
const app = express();

const saveOrderToFile = require("./utility/localFileManager");

const PORT = 8000;




app.get("/", (req, res) => res.status(200));
app.post("/submitOrder", (req, res) => {
    const dataObject = req.body;
    saveOrderToFile(dataObject)
    res.send("Your order has been submitted!");
})

app.listen(PORT, (error) => {
    if (error){
        throw error;
    }
    console.log("Test");
});