const mongoose = require('mongoose');
const { INTEGER } = require('sequelize');
const UserSchema = new mongoose.Schema({
   name:{type:String},
   PokedexNumber:{type:Number},
   ImgName:{type:Number},
   Generation:{type:Number},
   EvolutionStage:{type:Number},
   Evolved:{type:Number},
   FamilyID:{type:Number},
   CrossGen:{type:Number},
   Type1:{type:String},
   Type2:{type:String},
   Weather1:{type:String},
   Weather2:{type:String},
   STATTOTAL:{type:Number},
   ATK:{type:Number},
   DEF:{type:Number},
   STA:{type:Number},
   Legendary:{type:Number},
   Aquireable:{type:Number},
   Spawns:{type:Number},
   Regional:{type:Number},
   Raidable:{type:Number},
   Hatchable:{type:Number},
   Shiny:{type:Number},
   Nest:{type:Number},
   Novo:{type:Number},  // no lugar do New pois é palavra reservada
   NotGettable:{type:Number},
   FutureEvolve:{type:Number},
   SemPorCentoCP40:{type:Number},
   SemPorCentoCP39:{type:Number},
   date: { type: Date, default: Date.now()},
});


const Pokemons = mongoose.model('Pokemons',UserSchema);
module.exports = Pokemons;