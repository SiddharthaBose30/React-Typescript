type GreetTypes ={
    children:React.ReactNode
}

export function Props3(props: GreetTypes){
    return <div>{props.children}</div>
}