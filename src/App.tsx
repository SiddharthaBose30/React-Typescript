import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Greet'
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Loading } from './components/Loading';
import { Props2 } from './components/Props2';
import { Props3 } from './components/Props3';
import { Event } from './components/Event';
import { Input } from './components/input';
import { Style } from './components/StyleProps';
function App() {
  const name1={FName:"Lionel",Lname:"Messi"}
  const nameList=[{f:"Lionel",l:"Messi"},{f:"Kylian",l:"Mbappe"},{f:"Neymar",l:"Jr."}]
  return (
    <div className="App">
      <Greet name="string" isLoggedIn={false}/>
      <Greet name="string" isLoggedIn={true}/>
      <Greet name="string" num={20} isLoggedIn={false}/>
      <Person name={name1}/>
      <PersonList nameList={nameList}/>
      <Loading value='In Progress'></Loading>
      <Props2>YES</Props2>
      <Props3><Props2>YES2</Props2></Props3>
      <Event handleclick={(event,id)=>{console.log("Clicked",event,3*id)}}/>
      <Input  handleChange={(event)=>{console.log(event)}}/>
      <Style style={{border:'1px solid black', color:'red',background:'black',padding:'1rem', margin:'20px'}}/>
    </div>
  );
}

export default App;
