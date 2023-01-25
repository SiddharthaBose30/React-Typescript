type GreetTypes ={
    value: 'error' | 'success' | 'In Progress'
}

export function Loading(props: GreetTypes){
    return <div>{props.value =='error'?"Error":props.value=='success'?"Welcome":"In Progress"}</div>
}