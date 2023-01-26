type GreetTypes ={
    name:string,
    num?:number,
    isLoggedIn:boolean
}
export const Greet =({name,num,isLoggedIn}: GreetTypes)=>{
    // const {num=0}=props
    // console.log(num)
    return <div><h2>{isLoggedIn?"Welcome":num+name}</h2></div>
}