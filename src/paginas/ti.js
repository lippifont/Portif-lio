import '../css/Materias.css';
import ti from '../imagens/ti.png'
import { Link } from 'react-router-dom';

function Ti(){
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
                    <h1>Ti</h1>
                    <img src={ti}/>
                    <p>Durante o primeiro ano estudava sobre o harware dos computadores e a atividade que mais me destaquei foi<br/> crimpar os cabos de rede, e outro trabalho em que tivemos que achar o componente do nosso computador que estava com defeito,<br/> remove-lo e adicionar um que funcione, já no segundo era sobre os tipos de rede que existiam, confesso que foi o tema mais difícil que ja estudei,<br/> a atividade que me destaquei mais foi a que precisavamos fazer a planta do lugar e retrabalhar os roteadores de wifi e ponto de acesso calculando<br/> tudo desde os cabos ate os lugar onde estaria localizados os roteadores e repetidores, nesse ultimo ano a atividade que me vi um pouco perdido<br/> porém depois ficou mais fácil foi criar um jogo pois nunca havia criado e nem olhado criarem.</p>
                </div>
            </div>
        </body>
    );
}

export default Ti;