import React, { } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
//import api from '../../services/Api'
const Editar = () => {
    const { id } = useParams()
    console.log(id);

 /*
    const [name, setName] = useState('');
    const [ATK, setATK] = useState('');
    const [DEF, setDEF] = useState('')
    const [PokedexNumber, setPokedexNumber] = useState('')
    const [ImgName, setImgName] = useState('')
    const [Generation, setGeneration] = useState('')
    const [EvolutionStage, setEvolutionStage] = useState('')
    const [Evolved, setEvolved] = useState('')
    const [FamilyID, setFamilyID] = useState('')
    const [CrossGen, setCrossGen] = useState('')
    const [Type1, setType1] = useState('')
    const [Type2, setType2] = useState('')
    const [Weather1, setWeather1] = useState('')
    const [Weather2, setWeather2] = useState('')
    const [STATTOTAL, setSTATTOTAL] = useState('')
    const [STA, setSTA] = useState('')
    const [Legendary, setLegendary] = useState('')
    const [Aquireable, setAquireable] = useState('')
    const [Spawns, setSpawns] = useState('')
    const [Regional, setRegional] = useState('')
    const [Raidable, setRaidable] = useState('')
    const [Hatchable, setHatchable] = useState('')
    const [Shiny, setShiny] = useState('')
    const [Nest, setNest] = useState('')
    const [Novo, setNovo] = useState('')
    const [NotGettable, setNotGettable] = useState('')
    const [FutureEvolve, setFutureEvolve] = useState('')
    const [SemPorCentoCP40, setSemPorCentoCP40] = useState('')
    const [SemPorCentoCP39, setSemPorCentoCP39] = useState('')
        */
//===============================buscar o que sera editado =====================

/*   
useEffect(() => {
        const DetalhesPokemon = async () => {
            await api.get('/pokemon/' + id).then((response) => {
              console.log(response)

            })
         }
         DetalhesPokemon();
    },[id])
 //===============================================================================   
  //========================== editar pokemon ======================================
 */ 

  
    const EditPokemon = async e =>{
 /* 
        e.preventDefault();
    console.log("editado com sucesso");
    const headers = {
        'headers': {
          //os dados serao enviado em formato json
          'Content-Type': 'application/json'
        }
      }
    */
        /*
        await api.put('/pokemon/',{

        },headers).then((response)=>{

        })
       */
       
    }
    



    return (
        <div className='container mt-5'>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <h2 className='text-center'>Rafael Desenvolvedor</h2>
                    </div>
                    <div className="col">
                        <h1 className='text-center'>Editar Pokemon</h1>
                    </div>
                    <div className="col">
                        <button type="button"
                            className="btn btn-outline-success">
                            <Link to="/" className='link'> Voltar </Link>
                        </button>
                    </div>
                </div>

                <div className="container text-center">
                    <form onSubmit={EditPokemon} className="text-center m-3">
                        <input
                            className="form-control m-3"
                            type='text'
                            name='name'
                            placeholder='nome Pokemon...'
                             
                        />
                        <input
                            className="form-control m-3"
                            type='Number'
                            name='ATK'
                            placeholder='numero ATK...'

                        />
                        <input
                            className="form-control m-3"
                            type='Number'
                            name='DEF'
                            placeholder='numero DEF...'

                        />
                        <input
                            className="form-control m-3"
                            type='Number'
                            name='PokedexNumber'
                            placeholder='numero Pokedex Number...'

                        />
                        <input
                            className="form-control m-3"
                            type='Number'
                            name='ImgName'
                            placeholder='numero ImgName...'

                        />
                        <input
                            className="form-control m-3"
                            type='Number'
                            name='Generation'
                            placeholder='numero Generation...'

                        />
                        <input
                            className="form-control m-3"
                            type='Number'
                            name='EvolutionStage'
                            placeholder='numero EvolutionStage...'

                        />
                        <input
                            className="form-control m-3"
                            type='Number'
                            name='Evolved'
                            placeholder='numero Evolved...'

                        />
                        <input
                            className="form-control m-3"
                            type='Number'
                            name='FamilyID'
                            placeholder='numero FamilyID...'

                        />
                        <input
                            className="form-control m-3"
                            type='Number'
                            name='CrossGen'
                            placeholder='numero CrossGen...'

                        />
                        <input
                            className="form-control m-3"
                            type='text'
                            name='Type1'
                            placeholder='escreva Type1...'

                        />
                        <input
                            className="form-control m-3"
                            type='text'
                            name='Type2'
                            placeholder='escreva Type2...'

                        />
                        <input
                            className="form-control m-3"
                            type='text'
                            name='Weather1'
                            placeholder='escreva Weather1...'

                        />
                        <input
                            className="form-control m-3"
                            type='text'
                            name='Weather2'
                            placeholder='escreva Weather2...'

                        />
                        <input
                            className="form-control m-3"
                            type='Number'
                            name='STATTOTAL'
                            placeholder='numero STATTOTAL...'

                        />
                        <input
                            className="form-control m-3"
                            type='Number'
                            name='STA'
                            placeholder='numero STA...'

                        />
                        <input
                            className="form-control m-3"
                            type='Number'
                            name='Legendary'
                            placeholder='numero Legendary...'

                        />
                        <input
                            className="form-control m-3"
                            type='Number'
                            name='Aquireable'
                            placeholder='numero Aquireable...'
                        />
                        <input
                            className="form-control m-3"
                            type='Number'
                            name='Spawns'
                            placeholder='numero Spawns...'

                        />
                        <input
                            className="form-control m-3"
                            type='Number'
                            name='Regional'
                            placeholder='numero Regional...'

                        />
                        <input
                            className="form-control m-3"
                            type='Number'
                            name='Raidable'
                            placeholder='numero Raidable...'

                        />
                        <input
                            className="form-control m-3"
                            type='Number'
                            name='Hatchable'
                            placeholder='numero Hatchable...'

                        />
                        <input
                            className="form-control m-3"
                            type='Number'
                            name='Shiny'
                            placeholder='numero Shiny...'

                        />

                        <input
                            className="form-control m-3"
                            type='Number'
                            name='Nest'
                            placeholder='numero Nest...'

                        />

                        <input
                            className="form-control m-3"
                            type='Number'
                            name='Novo'
                            placeholder='numero New...'

                        />
                        <input
                            className="form-control m-3"
                            type='Number'
                            name='NotGettable'
                            placeholder='numero NotGettable...'

                        />
                        <input
                            className="form-control m-3"
                            type='Number'
                            name='FutureEvolve'
                            placeholder='numero FutureEvolve...'

                        />
                        <input
                            className="form-control m-3"
                            type='Number'
                            name='SemPorCentoCP40'
                            placeholder='numero SemPorCentoCP40...'

                        />
                        <input
                            className="form-control m-3"
                            type='Number'
                            name='SemPorCentoCP39'
                            placeholder='numero SemPorCentoCP39...'

                        />

                        <button type="submit" className="btn btn-outline-success">Atualizar</button>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default Editar;