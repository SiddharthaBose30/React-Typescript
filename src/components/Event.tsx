import React from "react";

type GreetTypes ={
    handleclick: (event:React.MouseEvent<HTMLButtonElement>,id:number)=> void;
}
export const Event =(props: GreetTypes)=>{
    
    return <button onClick={(event)=>{props.handleclick(event,1)}}>EVENT button</button>
}