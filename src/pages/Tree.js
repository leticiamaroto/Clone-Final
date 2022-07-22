import React from "react";
import { Link } from "react-router-dom";


export default class App extends React.Component {

    componentDidMount(){
        document.title ="Natureza"
      }

render(){
    return(
        <div>
        <div className="green">
         <div className="childBox">
         <div className="circle">
          <h1 className="number">5</h1>
         </div>
           <h2 className="sub">Natureza</h2>
           <h4 className="description">
           Conservar árvores em áreas urbanas de larga escala
           </h4>
         </div>

        </div>
        <p className="content">
        Proteger, restaurar e promover o uso sustentável dos ecossistemas terrestres, gerir de forma sustentável as florestas, combater a desertificação, travar e reverter a degradação dos solos e travar a perda da biodiversidade
        </p>
        
        </div>
    )
}
}