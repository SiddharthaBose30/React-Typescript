import React from "react";

type GreetTypes ={
    style:React.CSSProperties
}
export const Style =(props: GreetTypes)=>{
    
    return <div style={props.style}>CSS</div>
}