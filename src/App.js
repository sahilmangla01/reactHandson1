import FunctionComp from "./Components/FunctionComponent";
import ClassComp from "./Components/ClassComponent";
import React ,{useState} from "react";
import "./App.css"
function App() {
  const [fState , setFState]=useState(false)
  const [cState , setCState]=useState(false)
 
    return (
    <>   
    <h1 className="Heading">Styling Using Function and Class Component</h1>
    <button onClick={()=> setFState(!fState)} className="Btn1" >To see Styling in Function Component</button>
    <button onClick={()=> setCState(!cState)} className="Btn2">To see Styling in Class Component</button>
    
    <div className="compo">
    {/* {fState?<FunctionComp/>:""} */}
    {fState && <FunctionComp/>}
    {/* {cState?<ClassComp/>:""} */}
    {cState && <ClassComp/>}
    </div>
    </>

  );
}

export default App;
