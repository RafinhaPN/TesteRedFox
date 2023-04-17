import React, {useState } from 'react'
const PokemonImagem =()=>{


    const [dados, setDados] = useState({
        PokedexNumber: 1,
    })

    const enviarInput = e => setDados({ ...dados, [e.target.name]: e.target.value });
     return(
        <>
          <input
             className="form-control m-3"
             type='Number'
             name='PokedexNumber'
             placeholder='imagens '
            onChange={enviarInput}
         />
{   dados.PokedexNumber >= 0 ?
                            <>
  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${dados.PokedexNumber}.svg`} />
                           
                            </>:<p>Nenhum pokemon selecionado</p>}

        
        
        </>
     )

}

export default PokemonImagem;