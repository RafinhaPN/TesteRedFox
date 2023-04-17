const Pokemons = require('../Models/Pokemon');

async function ValidarCampos (req,res,next){

    const { name,PokedexNumber,ImgName,Generation,EvolutionStage,Evolved,FamilyID,
        CrossGen,Type1,Type2,Weather1,Weather2,STATTOTAL,ATK,DEF,STA,Legendary,Aquireable,
        Spawns,Regional,Raidable,Hatchable5,Shiny,Nest,Novo,NotGettable,FutureEvolve,
        SemPorCentoCP40,SemPorCentoCP39 
         } = req.body

    if(!name && !ATK && !DEF ){
    return res.json({
        error: true,
        message: "Preencha os campos name ATK DEF !",

    })
  }
  next();
}

  async function PokemonExiste (req,res,next){
    const  {name}  = req.body
    const pokemonExiste = await Pokemons.findOne({name: name})
    if(pokemonExiste){
        return res.json({
            error: true,
            message: "Pokemon ja existe no sistema!",
    
        })
    }
    next();
}

module.exports ={ ValidarCampos,PokemonExiste }
