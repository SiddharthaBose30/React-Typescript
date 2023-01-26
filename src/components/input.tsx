import React from "react";

type GreetTypes ={
    handleChange: (event:React.ChangeEvent<HTMLInputElement>)=> void;
}
export const Input =(props: GreetTypes)=>{
    const handleChangeEvent= (event:React.ChangeEvent<HTMLInputElement>)=> console.log(event);
    return <input type="text" onChange={handleChangeEvent}/>
}