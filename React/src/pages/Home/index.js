import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './home.css';
import api from '../../services/Api';
const Home = () => {

    const [pokemons, setPokemon] = useState([]);
    //=====================Listar====================================
    const Listar_Pokemon = async () => {
        await api.get('/pokemons').then((response) => {
            console.log(response.data.dados);
            setPokemon(response.data.dados);
        })
    }
    useEffect(() => {
        Listar_Pokemon();
    }, [])
    //=========================================================== 

    //====================== Apagar  pokemon ==========================
    const Apagar = async (idpokemon) => {
        console.log(idpokemon)

        await api.delete('/pokemon/' + idpokemon)
            .then((response) => {
                console.log(response)
                Listar_Pokemon();
            }).catch((err) => {

            })

    }
    //========================================================================


    return (
        <div className='container mt-5'>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <h2 className='text-center'>Rafael Desenvolvedor</h2>
                    </div>
                    <div className="col">
                        <h1 className='text-center'>Pokemons </h1>
                    </div>
                    <div className="col">
                        <button
                            type="button"
                            className="btn btn-outline-success">
                            <Link className='link' to="/cadastrar">Cadastrar</Link>
                        </button>
                    </div>
                </div>
            </div>
            <hr />
            <table className="table table-hover">
                <thead className='text-center'>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Ataque</th>
                        <th scope="col">Defesa</th>
                        <th scope="col">Data</th>
                        <th scope="col">Acões</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {pokemons.map(pokemon => (
                        //==========================================================  
                        <tr key={pokemon._id}>
                            <th scope="row">{pokemon._id}</th>
                            <td>{pokemon.name}</td>
                            <td>{pokemon.ATK}</td>
                            <td>{pokemon.DEF}</td>
                            <td>{pokemon.date}</td>

                            <td>
                                <button
                                    type="button"
                                    className="btn btn-warning m-2">
      <Link to={"/editar/ " + pokemon.PokedexNumber} className='link' >  Editar </Link>
                                </button>

                                <button type="button" className="btn btn-danger m-2">
                                    <Link className='link' onClick={() => Apagar(pokemon._id)} > Apagar </Link>
                                </button>

                                <button
                                    type="button" className="btn btn-primary m-2">
                                    <Link to={"/detalhes/"+ pokemon._id } className='link'> Detalhes </Link>
                                </button>
                                                 
                            
                            
                            </td>
                        </tr>
                        //===============================================    
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default Home;

