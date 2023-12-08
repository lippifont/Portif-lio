import '../css/Materias.css';
import { Link } from 'react-router-dom';
import ra from '../imagens/realidadeaumentada.png'

function RealidadeAumentada(){
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
                    <h1>Realidade Aumentada</h1>
                    <img src={ra}/>
                    <p><span>O que é realidade aumentada?</span> A tecnologia conhecida como Realidade Aumentada (RA) combina elementos do mundo físico com elementos virtuais,<br/> sobrepondo informações digitais ao ambiente físico. Ao contrário, a Realidade Aumentada distorce a percepção do mundo real, enquanto a Realidade Virtual cria um ambiente totalmente digital.</p>
                    <p><span>Elementos visuais e interação em tempo real:</span> A RA inclui dados digitais, tais como imagens, gráficos, textos ou vídeos, ao mundo físico, sendo visualizados normalmente<br/> através de aparelhos como tablets, óculos, smartphones ou outros dispositivos no entanto a interação dinâmica entre o ambiente físico e o digital é posibilidade por meio da<br/> sobreposição de elementos virtuais em tempo real e essa interação dos usuários com os elementos virtuais da AR poderão mover ou manipular objetos digitais dentro do ambiente físico.</p>
                    <p><span>Onde ele pode se encontrar?</span> Em diversas áreas, como jogos, educação, medicina, design, varejo, produção, publicidade e turismo, a RA tem aplicações.</p>
                </div>
            </div>
        </body>
    );
}

export default RealidadeAumentada;