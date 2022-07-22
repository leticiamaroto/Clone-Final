import React from "react";
import { Link } from "react-router-dom";


export default class App extends React.Component {

    componentDidMount(){
        document.title ="Investimento"
      }

render(){
    return(
        <div>
        <div className="lilac">
         <div className="childBox">
          <div className="circle">
            <h1 className="number">2</h1>
          </div>
           <h2 className="sub">Investimento</h2>
           <h4 className="description">
           Investir de forma sustentável em ambientes que facilitem o dia a dia dos moradores
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