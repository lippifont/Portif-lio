import '../css/Materias.css';
import metav from '../imagens/metav.png'
import { Link } from 'react-router-dom';

function Metaverso(){
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
                    <h1>Meta Verso</h1>
                    <img src={metav}/>
                    <p><span>O que é MetaVerso?</span> O termo “metaverso” refere-se a um espaço virtual tridimensional onde os usuários podem interagir uns com os outros em um ambiente digital<br/> compartilhado em tempo real. Essa ideia vai além dos ambientes virtuais tradicionais em busca de experiências mais imersivas e sociais.</p>
                    <p><span>Ambiente e interação em tempo real:</span> Um ambiente virtual tridimensional que oferece uma sensação de profundidade e realismo é o que caracteriza o metaverso<br/> e além disso os usuários podem interagir com elementos do ambiente digital em tempo real, criando uma experiência dinâmica e colaborativa.</p>
                    <p><span>Onde ele pode se encontrar?</span> Além dos jogos, o metaverso tem o potencial de ser utilizado em diversas áreas, tais como educação, negócios, entretenimento,<br/> saúde e outras, oferecendo oportunidades únicas e particulares para cada área.</p>
                </div>
            </div>
        </body>
    );
}

export default Metaverso;