const express = require('express');
const app = express();
const routes = require('../node/src/Routes/routes');
const cors = require('cors');
const conectar = require('../../Node_backend/node/src/Database/db');
conectar();

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");     
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER,Content-Type,Authorization");
    app.use(cors())
    next();    
  });
app.use(express.json());
app.use(routes);
app.listen(8081,function(){
    console.log("rodando");
})