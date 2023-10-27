import "./styles.css"

export default function App(){
 return(
  //This is a fragment, an empty tag.
  //Used because we can only return one thing, so we're returning the fragment w/ out HTML code  
  <> 
    <div className= 'container'>
      <h1 className= 'title'>Fun-tac-Toe in <span>React</span></h1>
    </div>
   
    <Reset/>
  </>
 )
}
 //Only With Props, can we can pass data into a component 
//  function Title(props){
//   return(<h1>{props.content}</h1>
//   )
//  }
 function Reset(){
  return <button>Reset</button>
 }


