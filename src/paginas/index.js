import '../css/App.css';
import { Link } from 'react-router-dom';
import pc from '../imagens/pc.png'

function Principal(){
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
                <div class="home-text">
                    <h1>Site<br/>Portfolio</h1>
                    <img class="pc" src={pc}/>
                    <h2>Aqui você encontrará sobre minhas atividades favoritas no Ensino Médio Técnico do Senac.</h2>
                </div>
            </div>
        </body>
    );
}

export default Principal;