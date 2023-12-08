import '../css/Materias.css';
import { Link } from 'react-router-dom';
import ml from '../imagens/machinelearning.png'

function MachineLearning(){
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
                    <h1>Machine Learning</h1>
                    <img src={ml}/>
                    <p><span>O que é Machine Learning?</span> O Machine Learning, também conhecido como aprendizado de máquina, é um ramo da Inteligência Artificial<br/> que se concentra na criação de modelos computacionais e algoritmos que podem aprender padrões a partir de dados e melhorar ao longo do tempo sem programação explícita.<br/> Em vez de seguir instruções específicas, os sistemas de aprendizagem automática utilizam dados para treinar e melhorar as suas capacidades.</p>
                    <p><span>Algoritmo:</span> Procedimentos matemáticos que ajustam os parâmetros do modelo com base nos dados de treinamento.<br/> Algoritmos populares incluem algoritmos de rede neural, vizinhos k-proximais e regressão linear.</p>
                    <p><span>Segurança e Privacidade:</span> Segurança e a privacidade exigem medidas rigorosas ao coletar e usar grandes conjuntos de dados.</p>
                </div>
            </div>
        </body>
    );
}

export default MachineLearning;