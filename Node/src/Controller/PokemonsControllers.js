const Pokemons = require('../Models/Pokemon');
module.exports = {


    async create(req, res) {
        const pokemons = await Pokemons.create(req.body);
        if (pokemons) {
            return res.status(200).json({
                error: false,
                message: 'Pokemon salvo com sucesso!'
            })
        } else {
            return res.status(200).json({
                error: false,
                message: 'Error: Pokemon não salvo com sucesso!'
            })
        }

    },

    async Listar(req, res) {
        const pokemons = await Pokemons.find({});
        if (pokemons) {
            return res.status(200).json({
                error: false,
                dados: pokemons
            })
        } else {
            return res.status(400).json({
                error: false,
                message: 'Nenhum Pokemon encontrado!'
            })
        }
    },

    async Listar_um_pokemon(req, res) {
        const { id } = req.params;
        const pokemon = await Pokemons.findById({ _id: id })
        if (pokemon) {
            return res.json({
                error: false,
                message: "Pokemon encontrado!",
                item: pokemon
            })
        } else {
            return res.json({
                error: false,
                message: "Nenhum pokemon encontrado!",

            })
        }
    },

    async Atualizar(req,res){
        const { id } = req.params;
         const { name,PokedexNumber,ImgName,Generation,EvolutionStage,Evolved,FamilyID,
         CrossGen,Type1,Type2,Weather1,Weather2,STATTOTAL,ATK,DEF,STA,Legendary,Aquireable,
         Spawns,Regional,Raidable,Hatchable5,Shiny,Nest,Novo,NotGettable,FutureEvolve,
         SemPorCentoCP40,SemPorCentoCP39 
          } = req.body
        const pokemons = await Pokemons.findByIdAndUpdate({ _id: id }, { name,ATK,DEF })
        if (pokemons) {
            return res.json({
                error: false,
                message: "Pokemon atualizado com sucesso!",
                dados:{
                    name,
                    ATK,
                    DEF
                }
            })
        } else {
            return res.json({
                error: true,
                message: "Nenhum usuario encontrado  para atualização!",
    
            })
        }
    },
    async Deletar(req,res){
        const { id } = req.params;
        const pokemon = await Pokemons.findByIdAndDelete({ _id: id });
        if (pokemon) {
            return res.json({
                error: false,
                message: "Pokemon deletado com sucesso!",
                
            })
        } else {
            return res.json({
                error: true,
                message: "Nenhum Pokemon encontrado!",
                
            })
        
        }
    }
}