const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
// const http = require('http');
// const Websocket = require('ws')
// const wss = new Websocket.Server({PORT})

app.use(cors())
app.use(express.json())


var currentValue = 0;


app.post('/home', (req,res) =>{
    const methodType = req.body.method;
    console.log(methodType)
    if(methodType == 'increment'){
        currentValue += 1;
    }
    else{
        currentValue -= 1;
    }
    console.log(currentValue);
    res.send({success: true,
        payload:currentValue})
    });

app.get('/home', (req,res) =>{
    res.send({success: true,
        payload:currentValue})
        });



app.get('/',(req,res) =>{
    res.send('***Counter App Server is running***')
    });

app.listen(PORT, () => {
    console.log(`Counter App Server is running.... at port ${PORT}`);

});
// const wsServer = new WebSocketServer({
//     httpServer: wss
// });
// const clients = {};



// wss.on('connection',(ws) => {
//     console.log('counter app is connected')
// })






// const server = http.createServer(function (req, res){
//     if(req.url ==='/home'){
//         console.log(req.body)
//     }
//     console.log(req.body);
//     res.end('Welcome to the Counter App Server')
// });
// server.listen(PORT); //3 - listen for any incoming requests

// console.log('Node.js web server at port 5000 is running..')
// http.request("http://localhost:3000/", (response) => {
//     let data = '';
//     console.log(response.body);
//     response.on('data', (chunk) =>{
//         data += chunk;
//     });
//     response.on('end', () =>{
//         console.log(data);
//     });
// })
// .on('error', (error) =>{
//     console.log(error);
// });

