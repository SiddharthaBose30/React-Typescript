type GreetTypes ={
    name:string,
    num:number,
    isLoggedIn:boolean
}
export function Greet(props: GreetTypes){
    return <div><h2>{props.isLoggedIn?"Welcome":props.name+props.num}</h2></div>
}