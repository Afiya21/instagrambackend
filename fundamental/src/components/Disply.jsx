import React from "react";
import "./Display.css"

const Disply=(props)=>{
    return(
    <div>
        <div style={{margin:"auto", backgroundColor:"blue",height:"100px",width:"200px"}}> 
            <h3> hello {props.firstname} {props.lastname}</h3>
        <h3 className="textstyling">your age is {props.age}</h3>
        
        </div>
        {props.children}
        </div>
    );
}


export default Disply;