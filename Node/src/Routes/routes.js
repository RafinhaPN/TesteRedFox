const express = require('express');
const routes = express.Router();

//const {ValidarCampos,PokemonExiste } = require('../midlewears/valida');
const PokemonsControllers = require('../Controller/PokemonsControllers');

routes.post('/pokemon',PokemonsControllers.create);
routes.get('/pokemons',PokemonsControllers.Listar);
routes.get('/pokemon/:id',PokemonsControllers.Listar_um_pokemon);
routes.put('/pokemon/:id',PokemonsControllers.Atualizar);
routes.delete('/pokemon/:id',PokemonsControllers.Deletar);


module.exports = routes;