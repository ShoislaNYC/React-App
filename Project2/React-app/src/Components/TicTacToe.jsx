import "./styles.css"
import React from 'react'
import board from "./Board"
import circle_icon from './Assets/circle.png'
import cross_icon from './Assets/cross.png'


/*----- Constants & Variables -----*/
let data = ["","","","","","","","",""];


/*----- App -----*/
const TicTacToe = () => {

 return(
  <> 
    <div className= 'container'>
      <h1 className= "title">Fun-tac-Toe in <span>React</span></h1>
        <board/>
        <button className="btn">Reset</button>
    </div>
  </>
 )
}
export default TicTacToe



