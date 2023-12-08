import '../css/Materias.css';
import mat from '../imagens/matematica.png';
import { Link } from 'react-router-dom';

function Matematica(){
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
                    <h1>Matemática</h1>
                    <img src={mat}/>
                    <p>Durante o primeiro ano estudava sobre equações e suas atividades eram nos cadernos, normalmente ficava com dúvida,<br/> mas logo já a tirava e conseguia realizar, já no segundo eram mais atividades sobre seno e cos, logo fizemos uma atividade onde teríamos que medir<br/> alguns lugares específicos do senac de uma forma diferente, foi bem interessante e no final consegui me sair bem também,<br/> nesse ultimo ano a atividade que mais me destaquei acredito que tenha sido essa ultima "integrada" onde fizemos um formulário e saíamos da sala para fazer<br/> uma pesquisa de campo e depois apresentar a sala nosso formulário o porque do tema e seus dados e fizemos uma atividade sobre embalagens,<br/> onde procuraríamos o porque sejam desta forma, o quanto custaria para transportar, basicamente falar desde a produção ate a venda delas em mercados,<br/> uma atividade diferente e muito interessante e tivemos um bom desenvolvimento.</p>
                </div>
            </div>
        </body>
    );
}

export default Matematica;