type GreetTypes ={
    children:string
}

export function Props2(props: GreetTypes){
    return <div>{props.children}</div>
}