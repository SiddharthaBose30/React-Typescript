import {name}from './Person.types'
type GreetTypes ={
    nameList:name[]
}
function getList(e:name){
return <li><h2>{e.fname+" "+e.lname}</h2></li>
}
export function PersonList(props: GreetTypes){
    return <div><ul>{props.nameList.map(getList)}</ul></div>
}