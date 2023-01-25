type GreetTypes ={
    name:{FName:string,
     Lname:string}
}
export function Person(props: GreetTypes){
    return <div><h2>Welcome {props.name.FName} {props.name.Lname}</h2></div>
}