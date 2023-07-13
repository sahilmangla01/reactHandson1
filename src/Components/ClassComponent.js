import React, { Component } from "react";
import "./ClassComponent.css"
class ClassComp extends Component{
    render(){
        return(
            <>
             <div className="classDiv">
                <h1>This is created using class Component</h1>
                <p className="paraCSS">This is done using external CSS</p>
                <p style={{color:"blue" , fontSize:"20px", fontWeight:"bold"}}>This is done using inline CSS</p>
            </div>
            </>
        )
    }
}

export default ClassComp