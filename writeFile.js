const fs = require('fs')
const data = 'hello-node'
function writeWelcome(path){


fs.writeFile(path,data ,'utf-8',(err)=>{
    if (err){
        console.log(err.message);
        
    }
})
}


module.exports = {writeWelcome}


writeWelcome('hello.txt')

