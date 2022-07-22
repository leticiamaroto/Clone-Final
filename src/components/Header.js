import React from "react";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

ul {
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  font-size: 30px;
  background-color: #CDCDB4;
  cursor: pointer;
  height: 45px;
}

li{
    color: #363636;

  &:hover {
    color: #8B8B7A;
    font-size: 31px;
}
`;


export default class App extends React.Component {



render(){

    return(
      <div>
        <GlobalStyle/>
    <ul>
    <Link to="/">
    <li>Início</li>
    </Link>
    <Link to="#">
    <li>Contato</li>
    </Link>
    <Link to="#">
    <li>Sobre nós</li>
    </Link>
    </ul>
      </div>
    )
}
}