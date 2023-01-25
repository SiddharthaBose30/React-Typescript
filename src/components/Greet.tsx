type GreetTypes ={
    name:string,
    num?:number,
    isLoggedIn:boolean
}
export const Greet =(props: GreetTypes)=>{
    const {num=0}=props
    // console.log(num)
    return <div><h2>{props.isLoggedIn?"Welcome":props.name+num}</h2></div>
}