import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

// pages
import Home from "./pages/Home";
import Header from "./components/Header"
import Asphalt from "./pages/Asphalt";
import Money from "./pages/Money";
import Security from "./pages/Security";
import Structure from "./pages/Structure";
import Tree from "./pages/Tree";


const GlobalStyle = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}

body{
  background-color: #EEEED1;
}

.textBox{
  background-color: #CDCDB4;
  border-radius: 30px;
  height: 50vh;
  width: 90vw;
  margin-left: 56px;
  margin-top: 18vh;
  display: flex;
}
.reta{
  background-color: #EEEED1;
  border-radius: 2px;
  width: 1vw;
  height: 38vh;
  display: flex;
  margin-top: 7vh;
  margin-left: 36vw;
  box-shadow: 10px 10px 200px 10px white;
}

h1 {
  position: relative;
  margin-top: 10vh;
  margin-left: 2vw;
  font-size: 36px;
  margin-right: -30vw;
}
p {
  position: relative;
  top: 7vh;
  font-size: 21px;
  margin-left: 2vw;
  margin-right: 6vw;
  width: 80vw;
  margin-top: -1vh;
  color: #363636;
}
a{
  color: #EEEED1;
}
a:link{
  text-decoration: none;
}
section {
  position: relative;
  display: flex;
  width: 45%;
  top: 8vh;
  left: 6vw;
  justify-content: space-between;
}
section h3 {
  font-size: 35px;
  margin-right: 1vw;
  margin-left: 1vw;
}
section h4 {
  margin-top: 2vh;
}




.asphalt {
  display: flex;
  width: 12vw;
  height: 26vh;
  margin: 2vw;
  background-color: #6495ED;
  margin-top: 14vh;
  border-radius: 10px;
  box-shadow: 10px 10px 90px 10px #6495ED;
}
.money {
  display: flex;
  width: 12vw;
  height: 26vh;
  margin: 2vw;
  background-color: #BA55D3;
  margin-top: 14vh;
  border-radius: 10px;
  box-shadow: 10px 10px 90px 10px #BA55D3;
}
.security {
  display: flex;
  width: 12vw;
  height: 26vh;
  margin: 2vw;
  background-color: #FFD700;
  margin-top: 14vh;
  border-radius: 10px;
  box-shadow: 10px 10px 90px 10px #FFD700;
}
.structure {
  display: flex;
  width: 12vw;
  height: 26vh;
  margin: 2vw;
  background-color: #FF3E96;
  margin-top: 14vh;
  border-radius: 10px;
  box-shadow: 10px 10px 90px 10px #FF3E96;
}
.tree {
  display: flex;
  width: 12vw;
  height: 26vh;
  margin: 2vw;
  background-color: #76EE00;
  margin-top: 14vh;
  border-radius: 10px;
  box-shadow: 10px 10px 90px 10px #76EE00;
}



.blue {
  position: relative;
  top: 2vh;
  left: 6vw;
  width: 75rem;
  height: 20rem;
}
.lilac {
  position: relative;
  top: 2vh;
  left: 6vw;
  width: 75rem;
  height: 20rem;
}
.yellow {
  position: relative;
  top: 2vh;
  left: 6vw;
  width: 75rem;
  height: 20rem;
}
.pink {
  position: relative;
  top: 2vh;
  left: 6vw;
  width: 75rem;
  height: 20rem;
}
.green {
  position: relative;
  top: 2vh;
  left: 6vw;
  width: 75rem;
  height: 20rem;
}


.asfalto{
  width: 80px;
  height: 80px;
  margin-left: -5vw;
  margin-top: 10vh;
}
.real{
  width: 75px;
  height: 75px;
  margin-left: -7.7vw;
  margin-top: 10vh;
}
.segurança{
  width: 80px;
  height: 80px;
  margin-left: -6.4vw;
  margin-top: 10vh;
}
.estrutura{
  width: 80px;
  height: 80px;
  margin-left: -6vw;
  margin-top: 10vh;
}
.árvore{
  width: 80px;
  height: 80px;
  margin-left: -5.5vw;
  margin-top: 10vh;
}



.childBox{
  position: relative;
  width: 70%;
  top: 5vh;
  height: 35vh;
}
.number{
  margin-left: 1vw;
  font-size: 10vh;
  margin-left: 20px;
  color: #FFFFFF;
  aligin-items: center;
}
.sub{
  color: #8B0000;
  position: relative;
  top: 2vh;
  font-size: 8vh;
}
.description{
  position: relative;
  top: 6vh;
  width: 70%;
  font-size: 4vh;
}
.content{
  position: relative;
  width: 50%;
  top: 1vh;
  left: 4vw;
  margin-bottom: 2vh;
  font-weight: bolder;
  color: #4F4F4F;
}
.circle{
  border-radius: 50%;
  background-color: #8B0000;
  width: 75px;
  height: 85px;
}
`

export default function Work() {
  
    return (

      <Router>
        <GlobalStyle />
        <Header/>
        <Routes>
          <Route path = '/' element={<Home/>}/>
          <Route path ='/Asphalt' element={<Asphalt />}/>
          <Route path ='/Money' element={<Money />}/>
          <Route path ='/Security' element={<Security />}/>
          <Route path ='/Structure' element={<Structure />}/>
          <Route path ='/Tree' element={<Tree />}/>
        </Routes>
      </Router>

);
}