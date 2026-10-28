const fs = require("fs/promises");

async function storeData(object){
    const data = JSON.stringify(object);
    try{
        await fs.writeFile("./test.txt", data);        
    }
    catch(error){
        console.log(error);
    }
}

module.exports = storeData;
