const fs = require('fs')
function readWelcome(path){
    fs.readFile(path,'utf-8',(err,data) => {
        if (err){
            console.log(err.message);
            return
        }
        console.log(data);
        
    })
}

module.exports = {readWelcome}