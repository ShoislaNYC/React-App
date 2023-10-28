import "../styles.css"
import { useState } from "react";
import Board from "./Board"

/*----- App -----*/


const TicTacToe = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null));

 return(
  <> 
    <div className= 'container'>
      <h1 className= "title">Fun-tac-Toe in <span>React</span></h1>
        <Board tiles={tiles} />
        <button className="btn">Reset</button>
    </div>
  </>
 )
}
export default TicTacToe



