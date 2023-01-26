
import { personTypes } from "./Person.types"
export function Person(props: personTypes){
    return <div><h2>Welcome {props.name.fname} {props.name.fname}</h2></div>
}