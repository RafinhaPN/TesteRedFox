import React,{useState} from 'react'
import api from '../../services/Api';
const Form = () =>{
    const [dados, setDados  ] = useState({
       name:'',
       ATK:'',
       DEF:'',
       PokedexNumber:'',
       ImgName:'',
       Generation:'',
       EvolutionStage:'',
       Evolved:'',
       FamilyID:'',
       CrossGen:'',
       Type1:'',
       Type2:'',
       Weather1:'',
       Weather2:'',
       STATTOTAL:'',
       STA:'',
       Legendary:'',
       Aquireable:'',
       Spawns:'',
       Regional:'',
       Raidable:'',
       Hatchable:'',
       Shiny:'',
       Nest:'', 
       Novo:'',
       NotGettable:'',
       FutureEvolve:'',
       SemPorCentoCP40:'',
       SemPorCentoCP39:'',

    })
     
     const enviarInput = e => setDados({ ...dados, [e.target.name]: e.target.value });

     const enviar = async (e) =>{
        e.preventDefault();
        console.log("funciona");
        console.log(dados.ATK,dados.DEF,dados.name);
       
        const headers = {
        'headers':{
            //os dados serao enviado em formato json
            'Content-Type': 'application/json'
        }
      }
      await api.post('/pokemon',dados,headers).then((response)=>{
        console.log(response);  
      }).catch((err)=>{
        console.log("ERRROR :" + err)
      })
        
    } 

    return(
        <div className="container text-center m-3">
        <form onSubmit={enviar} className="text-center m-3">
            <input
                className="form-control m-3"
                type='text'
                name='name'
                placeholder='nome Pokemon...'
                onChange={enviarInput}
            />
            <input
                className="form-control m-3"
                type='Number'
                name='ATK'
                placeholder='numero ATK...'
                onChange={enviarInput}
            />
            <input
                className="form-control m-3"
                type='Number'
                name='DEF'
                placeholder='numero DEF...'
                onChange={enviarInput}
            />
             <input
                className="form-control m-3"
                type='Number'
                name='PokedexNumber'
                placeholder='numero Pokedex Number...'
                onChange={enviarInput}
            />
             <input
                className="form-control m-3"
                type='Number'
                name='ImgName'
                placeholder='numero ImgName...'
                onChange={enviarInput}
            />
             <input
                className="form-control m-3"
                type='Number'
                name='Generation'
                placeholder='numero Generation...'
                onChange={enviarInput}
            />
             <input
                className="form-control m-3"
                type='Number'
                name='EvolutionStage'
                placeholder='numero EvolutionStage...'
                onChange={enviarInput}
            />
             <input
                className="form-control m-3"
                type='Number'
                name='Evolved'
                placeholder='numero Evolved...'
                onChange={enviarInput}
            />
             <input
                className="form-control m-3"
                type='Number'
                name='FamilyID'
                placeholder='numero FamilyID...'
                onChange={enviarInput}
            />
            <input
                className="form-control m-3"
                type='Number'
                name='CrossGen'
                placeholder='numero CrossGen...'
                onChange={enviarInput}
            />
            <input
                className="form-control m-3"
                type='text'
                name='Type1'
                placeholder='escreva Type1...'
                onChange={enviarInput}
            />
            <input
                className="form-control m-3"
                type='text'
                name='Type2'
                placeholder='escreva Type2...'
                onChange={enviarInput}
            />
            <input
                className="form-control m-3"
                type='text'
                name='Weather1'
                placeholder='escreva Weather1...'
                onChange={enviarInput}
            />
            <input
                className="form-control m-3"
                type='text'
                name='Weather2'
                placeholder='escreva Weather2...'
                onChange={enviarInput}
            />
             <input
                className="form-control m-3"
                type='Number'
                name='STATTOTAL'
                placeholder='numero STATTOTAL...'
                onChange={enviarInput}
            />
              <input
                className="form-control m-3"
                type='Number'
                name='STA'
                placeholder='numero STA...'
                onChange={enviarInput}
            />
              <input
                className="form-control m-3"
                type='Number'
                name='Legendary'
                placeholder='numero Legendary...'
                onChange={enviarInput}
            />
             <input
                className="form-control m-3"
                type='Number'
                name='Aquireable'
                placeholder='numero Aquireable...'
                onChange={enviarInput}
            />
             <input
                className="form-control m-3"
                type='Number'
                name='Spawns'
                placeholder='numero Spawns...'
                onChange={enviarInput}
            />
            <input
                className="form-control m-3"
                type='Number'
                name='Regional'
                placeholder='numero Regional...'
                onChange={enviarInput}
            />
             <input
                className="form-control m-3"
                type='Number'
                name='Raidable'
                placeholder='numero Raidable...'
                onChange={enviarInput}
            />
              <input
                className="form-control m-3"
                type='Number'
                name='Hatchable'
                placeholder='numero Hatchable...'
                onChange={enviarInput}
            />
                <input
                className="form-control m-3"
                type='Number'
                name='Shiny'
                placeholder='numero Shiny...'
                onChange={enviarInput}
            />

             <input
                className="form-control m-3"
                type='Number'
                name='Nest'
                placeholder='numero Nest...'
                onChange={enviarInput}
            />

             <input
                className="form-control m-3"
                type='Number'
                name='Novo'
                placeholder='numero New...'
                onChange={enviarInput}
            />
            <input
                className="form-control m-3"
                type='Number'
                name='NotGettable'
                placeholder='numero NotGettable...'
                onChange={enviarInput}
            />
             <input
                className="form-control m-3"
                type='Number'
                name='FutureEvolve'
                placeholder='numero FutureEvolve...'
                onChange={enviarInput}
            />
             <input
                className="form-control m-3"
                type='Number'
                name='SemPorCentoCP40'
                placeholder='numero SemPorCentoCP40...'
                onChange={enviarInput}
            />
              <input
                className="form-control m-3"
                type='Number'
                name='SemPorCentoCP39'
                placeholder='numero SemPorCentoCP39...'
                onChange={enviarInput}
            />
            
            <button type="submit" className="btn btn-outline-success">Cadastrar</button>    
        </form>
    </div>
    )
}

export default Form;