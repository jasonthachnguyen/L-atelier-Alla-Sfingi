const fs = require("fs/promises");

async function saveOrderToFile(order){
    const data = JSON.stringify(order);
    try{
        await fs.writeFile("./order.txt", data);
    }
    catch(error){
        console.log(error);
    }
}

module.exports = saveOrderToFile;