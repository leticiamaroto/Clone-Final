import React from "react";
import { Link } from "react-router-dom";


export default class App extends React.Component {

    componentDidMount(){
        document.title ="Estrada"
      }

render(){
    return(
      <div>
        <div className="blue">
         <div className="childBox">
          <div className="circle">
            <h1 className="number">1</h1>
          </div>
           
           <h2 className="sub">Estradas Seguras</h2>
           <h4 className="description">
           Poder usufruir de vias públicas seguras para a proteção do ser humano
           </h4>
         </div>

        </div>
        <p className="content">
        Tornar a sociedade inclusiva para o desenvolvimento sustentável, viabilizando o acesso e gerando instituições responsáveis e conscientes.
        </p>
        
        </div>
    )
}
}