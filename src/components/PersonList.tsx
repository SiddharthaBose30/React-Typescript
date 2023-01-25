type GreetTypes ={
    nameList:{f:string,l:string}[]
}
function getList(e:{f:string,l:string}){
return <li><h2>{e.f+" "+e.l}</h2></li>
}
export function PersonList(props: GreetTypes){
    return <div><ul>{props.nameList.map(getList)}</ul></div>
}