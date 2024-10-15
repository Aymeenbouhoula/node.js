
const http = require('http')
const server = http.createServer((request,response) => {
    if(request.url === '/'){
        response.write('welcome to the server')
        response.end()
    }
    if(request.url === '/clients'){
        response.write(JSON.stringify([{

            id : 1,
            name : 'helmi',
            age : 32
        },
        {
            id : 2,
            name : 'asma',
            age : 45
        }
    ]))
    }
    response.end()
})


server.listen(3000)
console.log('Bouhoula server is running on port 3000');
