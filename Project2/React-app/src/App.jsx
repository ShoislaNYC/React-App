import "./styles.css"

export default function App(){
 return(
  //This is a fragment, an empty tag.
  //Used because we can only return one thing, so we're returning the fragment w/ out HTML code  
  <> 
    <Message content="Fun-Tac-Toe" />
  </>
 )
}
 //Only With Props, can we can pass data into a component 
 function Title(props){
  return(<p>{props.content}</p>
  )
 }

