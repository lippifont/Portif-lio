import '../css/Materias.css';
import humanas from '../imagens/humanas.png'
import { Link } from 'react-router-dom';

function Humanas(){
    return(
        <body>
            <header>
                <ul class="navbar">
                    <a><Link to="/">Inicio</Link></a>
                    <a><Link to="/sobre">Sobre</Link></a>
                    <a><Link to="/linguagens">Linguagens</Link></a>
                    <a><Link to="/matematica">Matemática</Link></a>
                    <a><Link to="/humanas">Humanas</Link></a>
                    <a><Link to="/natureza">Natureza</Link></a>
                    <a><Link to="/ti">Ti</Link></a>
                    <a><Link to="/automacao">Automação</Link></a>
                    <a><Link to="/metaverso">MetaVerso</Link></a>
                    <a><Link to="/realidadeaumentada">Realidade Aumentada</Link></a>
                    <a><Link to="/inteligenciaartificial">Inteligencia Artificial</Link></a>
                    <a><Link to="/machinelearning">Machine Learning</Link></a>
                </ul>
            </header>
            <div class="home">
                <div>
                    <h1>Humanas</h1>
                    <img src={humanas}/>
                    <p>Durante o decorrer deste bimestre a atividade que mais me dediquei e achei interessante foi a ONU,<br/> acredito ter tido um bom desempenho mesmo sendo algo que nunca imaginei que faria, agora falando<br/> sobre o trabalho da roda viva onde achei até que interessante porém acabou que mesmo fazendo tudo certo<br/> foi meio perdido ao decorrer das apresentações, tivemos no meio do ano uma semana de arte moderna onde fizemos<br/> uma colagem com algumas características sobre os povos indígenas, foi também um dos trabalhos mais legais de se fazer e todos fomos bem.</p>
                </div>
            </div>
        </body>
    );
}

export default Humanas;