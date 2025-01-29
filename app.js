const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('Welcome to the Express.js tutorial');
    console.log(req)
});

app.listen(5000, ()=>{
    console.log('Server is running on http://localhost:5000');
});