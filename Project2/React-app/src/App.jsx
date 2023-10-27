import "./styles.css"

export default function App(){
 return(
  //This is a fragment, an empty tag.
  //Used because we can only return one thing, so we're returning the fragment w/ out HTML code  
  <> 
    <div className= 'container'>
      <h1 className= "title">Fun-tac-Toe in <span>React</span></h1>
      <Reset className="btn"/>
    </div>
  </>
 )
}
 //Only With Props, can we can pass data into a component 
//  function Title(props){
//   return(<h1>{props.content}</h1>
//   )
//  }
 function Reset(){
  return <button className="btn">Reset</button>
 }

 function Board(){
  return 
  <div className="board">
    <div className="row1">
      <div className="boxes"></div>
      <div className="boxes"></div>
      <div className="boxes"></div>
    </div>
    <div className="row2">
      <div className="boxes"></div>
      <div className="boxes"></div>
      <div className="boxes"></div>
    </div>
    <div className="row3">
      <div className="boxes"></div>
      <div className="boxes"></div>
      <div className="boxes"></div>
    </div>
  </div>
 }


