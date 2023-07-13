import React from "react";
import './FunctionComponent.css'

const FunctionComp =()=>{
    return(
        <>
            <div className="functionDiv">
                <h1>This is created using functional Component</h1>
                <p className="paraCSS">This is done using external CSS</p>
                <p style={{color:"blue" , fontSize:"20px", fontWeight:"bold"}}>This is done using inline CSS</p>
            </div>
        </>
    )
}

export default FunctionComp;

