import React from "react";
import { Link } from "react-router-dom";


export default class App extends React.Component {

    componentDidMount(){
        document.title ="Estruturas e Obras"
      }

render(){
    return(
        <div>
        <div className="pink">
         <div className="childBox">
         <div className="circle">
          <h1 className="number">4</h1>
         </div>
           <h2 className="sub">Estruturas e Obras</h2>
           <h4 className="description">
           Acesso de todos à habitação segura com preço acessível e urbanizar as favelas
           </h4>
         </div>

        </div>
        <p className="content">
        Tornar as cidades e comunidades mais inclusivas, seguras, resilientes e sustentáveis
        </p>
        
        </div>  
    )
}
}