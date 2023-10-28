import "../styles.css"
import { useState } from "react";
import Board from "./Board"

/*----- App -----*/
const player_X = "x";
const player_O = "o";


function TicTacToe(){

  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(player_X);  

  const handleTileClick = (index) => {
    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);
    if (playerTurn === player_X){
      setPlayerTurn(player_O);
    }else
      setPlayerTurn(player_X);
  };
 return( 
  <> 
    <div className= 'container'>
      <h1 className= "title">Fun-tac-Toe in <span>React</span></h1>
        <Board tiles={tiles} onTileClick={handleTileClick} />
        <button className="btn">Reset</button>
    </div>
  </>
 )
}
export default TicTacToe



