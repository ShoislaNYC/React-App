import "../styles.css"
import React from 'react'
import Board from "./Board"

/*----- Constants & Variables -----*/
let data = ["","","","","","","","",""];


/*----- App -----*/
const TicTacToe = () => {

 return(
  <> 
    <div className= 'container'>
      <h1 className= "title">Fun-tac-Toe in <span>React</span></h1>
        <Board/>
        <button className="btn">Reset</button>
    </div>
  </>
 )
}
export default TicTacToe



