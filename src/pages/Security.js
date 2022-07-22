import React from "react";
import { Link } from "react-router-dom";


export default class App extends React.Component {

    componentDidMount(){
        document.title ="Segurança"
      }

render(){
    return(
        <div>
        <div className="yellow">
         <div className="childBox">
         <div className="circle">
          <h1 className="number">3</h1>
         </div>
           <h2 className="sub">Segurança</h2>
           <h4 className="description">
           Policiamento frequente garantindo a preservação da ordem pública e  paz social
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