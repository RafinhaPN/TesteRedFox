const mongoose = require('mongoose');

const conectar =() =>{
  mongoose.connect('mongodb://127.0.0.1:27017/test',{
   })
    .then(() => console.log('Connected!'));
      
}

module.exports =  conectar;


//mongodb+srv://rafamergulha:rafa%402704@cluster0.mjcec1y.mongodb.net/test