import '../css/App.css';
import profile from '../imagens/profile.jpg';
import { Link } from 'react-router-dom';

function Sobre(){
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
                    <h1>Gabriel Lippi</h1>
                    <img src={profile}/>
                    <p>Estudante no Ensino Médio Técnico no Senac Nações Unidas.<br/>Sou uma pessoa fácil de lidar e de se comunicar gosto bastante de trabalhar em equipe<br/> e sou uma pessoa tranquila e que gosta de ouvir opiniões diferentes para chegar a resolução de um trabalho.<br/> Meu plano para o futuro é cursar educação física e me especializar em personal treiner.</p>
                </div>
            </div>
        </body>
    );
}

export default Sobre;