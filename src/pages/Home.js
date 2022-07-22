import React from "react";
import { Link } from "react-router-dom";

//icons
 
import asfalto from "../img/asfalto.png";
import estrutura from "../img/estrutura.png";
import árvore from "../img/árvore.png";
import segurança from "../img/segurança.png";
import real from "../img/real.png";

export default class App extends React.Component {
  componentDidMount(){
    document.title ="Objetivos de Desenvolvimento Sustentáveis"
  }

  render() {
    return (
      <div>
        <div className="textBox">
        <h1>Os Objetivos de Desenvolvimento Sustentável no Pq. Independência</h1>
        <div className="reta"></div>
          <p>
            Os Objetivos de Desenvolvimento Sustentável são um apelo global à
            ação para acabar com a pobreza, proteger o meio ambiente e o clima e
            garantir que as pessoas, em todos os lugares, possam desfrutar de
            paz e de prosperidade. Estes são os objetivos para os quais as
            Nações Unidas estão contribuindo a fim de que possamos atingir a
            Agenda 2030 no Brasil.
          </p>
          </div>


          <section>
            
        <Link to="/Asphalt">
          <div className="asphalt">
            <h3>1</h3>
            <h4 className="subtitle">Estradas</h4>
            <img className="asfalto" src={asfalto} alt="ícone de estrada"/>
          </div>
        </Link>

        <Link to="/Money">
          <div className="money">
          <h3>2</h3>
          <h4 className="subtitle">Investimento</h4>
          <img className="real" src={real} alt="ícone simbolizando real"/>
        </div>
        </Link>

        <Link to="/Security">
          <div className="security">
          <h3>3</h3>
          <h4 className="subtitle">Segurança</h4>
          <img className="segurança" src={segurança} alt="ícone de segurança pública"/>
        </div>
        </Link>

        <Link to="/Structure">
          <div className="structure">
          <h3>4</h3>
          <h4 className="subtitle">Estruturas</h4>
          <img className="estrutura" src={estrutura} alt="ícone da estrutura de casa"/>
        </div>
        </Link>

        <Link to="/Tree">
          <div className="tree">
          <h3>5</h3>
          <h4 className="subtitle">Natureza</h4>
          <img className="árvore" src={árvore} alt="ícone de árvore"/>
        </div>
        </Link>
        
        </section>
      </div>
    );
  }
}
