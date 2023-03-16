// const http = require('http');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

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

var currentValue = 0;


app.post('/home', (req,res) =>{
    const methodType = req.body.method;
    console.log(methodType)
    // const recipe = await recipeCollection.insertOne(postRecipe);
    if(methodType == 'increment'){
        currentValue += 1;
    }
    else{
        currentValue -= 1;
    }
    console.log(currentValue);
    res.send({success: true,
        payload:currentValue})
        console.log(currentValue);
    
    });

app.get('/home', (req,res) =>{
    res.send({success: true,
        payload:currentValue})
        console.log(currentValue);
        });



app.get('/',(req,res) =>{
    res.send('***Counter App Server is running***')
    });

app.listen(PORT, () => {
    console.log(`Counter App Server is running.... at port ${PORT}`);

});