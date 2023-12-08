import '../css/Materias.css';
import { Link } from 'react-router-dom';
import ia from '../imagens/ia.png'

function InteligenciaArtificial(){
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
                    <h1>Inteligência Artificial</h1>
                    <img src={ia}/>
                    <p><span>O que é Inteligência artificial?</span> Inteligência Artificial (IA) é a capacidade de computadores ou outras máquinas de realizar tarefas que muitas vezes<br/> requerem inteligência humana. Essas tarefas incluem aprendizagem,<br/> raciocínio, resolução de problemas, reconhecimento de padrões, processamento de linguagem natural e tomada de decisões.</p>
                    <p><span>Segurança e Privacidade:</span> O armazenamento e utilização de dados em grande escala para fins de formação de modelos de IA levanta preocupações em torno da segurança cibernética e da privacidade.</p>
                    <p><span>Desemprego:</span> A automação incentivada pela IA pode resultar em transformações significativas, sendo substituída por tecnologias em alguns empregos.</p>
                </div>
            </div>
        </body>
    );
}

export default InteligenciaArtificial;