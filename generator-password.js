const generator = require('generate-password')

function generatePassword(){
    const password = generator.generate({
        length: 10,
        number:true
    }) 

    console.log(password);
}

function generatePassword2(
    length = 10 ,
    number = false,
    symbols = false,
    uppercase = false
){
    const password = generator.generate({
        length,
        number,
        symbols,
        uppercase
    })

    console.log(password);
}


module.exports = {generatePassword,generatePassword2}
