import './cadastrar.css';
import { Link } from 'react-router-dom'
import Form from '../../components/form';
const Cadastrar = () => {
    return (
        <div className='container mt-5'>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <h2 className='text-center'>Rafael Desenvolvedor</h2>
                    </div>
                    <div className="col">
                        <h1 className='text-center'>Cadastrar Pokemon</h1>
                        <hr />
                    </div>
                    <div className="col">
                        <button type="button"
                            className="btn btn-outline-success">
                            <Link to="/" className='link'> Voltar </Link>
                        </button>
                    </div>
                </div>
                 { /* formulario */ }
                 <Form />
            </div>

        </div>
    )
}

export default Cadastrar;