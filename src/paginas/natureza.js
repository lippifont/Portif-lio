import '../css/Materias.css';
import natu from '../imagens/natureza.png'
import { Link } from 'react-router-dom';

function Natureza(){
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
                    <h1>Natureza</h1>
                    <img src={natu}/>
                    <p>Interstellar foi basicamente o tema que mais decorreu nas aulas de química e é uma das matérias que mais gosto,<br/> assistimos ao filme e depois fizemos apresentações e pesquisas sobre ele, eu acredito também ter tido um bom desenvolvimento por ter essa curiosidade,<br/> antes disso fizemos um jogo de planetas que também foi muito legal e divertido pois todos da sala produziram um jogo e todos um diferente dos outros,<br/> outro filme que assistimos foi Chernobyl onde aprendemos sobre a radiação e sobre o quão prejudicial pode ser caso não as controle de forma certa,<br/> e fizemos um trabalho explicando mais sobre, achei muito legal e tive um bom desempenho mesmo tendo algumas dúvidas.</p>
                </div>
            </div>
        </body>
    );
}

export default Natureza;