import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Cadastrar from './pages/Cadastrar';
import Editar from './pages/Editar';
import Visualizar from './pages/Visualizar';
function App() {
  return (
    <>
     <Routes>
        <Route  path='/'  element={<Home/>}  />
        <Route  path='/cadastrar'  element={<Cadastrar/>}  />
        <Route  path='/editar/:id'  element={<Editar/>}  />
        <Route  path='/detalhes/:id'  element={<Visualizar/>}  />
  </Routes>
    </>
  );
}

export default App;
