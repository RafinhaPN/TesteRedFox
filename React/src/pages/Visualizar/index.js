import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import api from '../../services/Api'
import PokemonImagem from '../../components/imagem'
const Visualizar = () => {
    const { id } = useParams()
   // console.log(id);
   const [pokemon, setPokemon] = useState("");

  
  
    useEffect(() => {
        const DetalhesPokemon = async () => {
            await api.get('/pokemon/' + id).then((response) => {
               // console.log(response)
                setPokemon(response.data.item);
            })
        }
        DetalhesPokemon();
    }, [id])
    return (
        <div className='container mt-5'>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center'>Detalhes Pokemon</h1>
                        <PokemonImagem />
                    </div>
                    <hr />
                    <div className="card mb-3">
                        <div className="card-body">
                            <h1 className="card-title">{pokemon.name}</h1>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{pokemon.Type1}</h6>
                            <p className="card-text">Weather 1: {pokemon.Weather1}</p>
                            <p className="card-text"> Weather 2: {pokemon.Weather2}</p>
                            <p className="card-text">Spawns: {pokemon.Spawns}</p>
                            <p className="card-text">Data: {pokemon.date}</p>
                            <div className="col">
                                <button type="button"
                                    className="btn btn-outline-success">
                                    <Link to="/" className='link'> Voltar </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Visualizar;