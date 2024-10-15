// const readFile = require('./readFile')
// readFile.readWelcome('welcome.txt')




const {generatePassword, generatePassword2} = require('./generator-password')

generatePassword()
generatePassword2(30,false,true,true)