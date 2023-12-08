import '../css/Materias.css';
import auto from '../imagens/automacao.png'
import { Link } from 'react-router-dom';

function Automacao(){
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
                    <h1>Automação</h1>
                    <img src={auto}/>
                    <p><span>O que é Automação:</span> O uso de sistemas, tecnologias e procedimentos para executar tarefas ou operações sem intervenção humana direta<br/> é conhecido como automação. Esta estratégia tem como objetivo aumentar a produtividade em diversos setores, diminuir erros e melhorar a eficiência.</p>
                    <p><span>Diminuição e de custo e melhora na produtividade:</span> A aplicação da automatização muitas vezes resulta em uma redução dos custos operacionais a longo prazo,<br/> já que as máquinas podem operar constantemente sem requisitos ou benefícios e ocorre dessa forma uma maior quantidade de tarefas pode ser realizada por<br/> sistemas automatizados de maneira mais eficiente e rápida do que por humanos, o que aumenta a produção total em diversas indústrias.</p>
                    <p><span>Questões éticas e sociais:</span> Questões éticas e sociais são abordadas pela automação, tais como a substituição de empregos humanos, a necessidade de reciclagem profissional<br/> e a garantia de que a tecnologia afeta toda a sociedade.</p>
                </div>
            </div>
        </body>
    );
}

export default Automacao;