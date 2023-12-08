import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';

import Principal from './paginas/index'
import Sobre from './paginas/sobre'
import Linguagens from './paginas/linguagens'
import Matematica from './paginas/matematica'
import Humanas from './paginas/humanas'
import Natureza from './paginas/natureza'
import Ti from './paginas/ti'
import Automacao from './paginas/automacao'
import Metaverso from './paginas/metav'
import RealidadeAumentada from './paginas/ra'
import InteligenciaArtificial from './paginas/ia'
import MachineLearning from './paginas/ml'

function App(){

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/linguagens" element={<Linguagens/>}/>
        <Route path="/matematica" element={<Matematica/>}/>
        <Route path="/humanas" element={<Humanas/>}/>
        <Route path="/natureza" element={<Natureza/>}/>
        <Route path="/ti" element={<Ti/>}/>
        <Route path="/automacao" element={<Automacao/>}/>
        <Route path="/metaverso" element={<Metaverso/>}/>
        <Route path="/realidadeaumentada" element={<RealidadeAumentada/>}/>
        <Route path="/inteligenciaartificial" element={<InteligenciaArtificial/>}/>
        <Route path="/machinelearning" element={<MachineLearning/>}/>
      </Routes>
    </Router>
  );
}

export default App;