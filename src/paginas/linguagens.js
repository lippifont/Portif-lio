import '../css/Materias.css';
import linguagens from '../imagens/linguagens.png'
import { Link } from 'react-router-dom';

function Linguagens(){
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
                    <h1>Linguagens</h1>
                    <img src={linguagens}/>
                    <p>A atividade em que tivemos que fazer um roteiro para uma pessoa fazer no dia da arte moderna<br/> que ocorreu no centro de convenções do senac, foi uma atividade diferente de se fazer e muito legal,<br/> acredito ter realizado as atividades tanto de humanas quanto de linguagens já que eram juntos o tema<br/> desse dia da arte moderna com um bom desenvolvimento, outro trabalho diferente foi o dos movimentos artísticos<br/> onde pesquisar algumas obras de autores e escrevemos sobre quando foi criada e qual suas características<br/> e depois fazer uma troca entre as mesas da sala para explicar sobre nossa pesquisa e aprendermos sobre as demais obras.</p>
                </div>
            </div>
        </body>
    );
}

export default Linguagens;