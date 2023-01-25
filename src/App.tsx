import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Greet'
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
function App() {
  const name1={FName:"Lionel",Lname:"Messi"}
  const nameList=[{f:"Lionel",l:"Messi"},{f:"Kylian",l:"Mbappe"},{f:"Neymar",l:"Jr."}]
  return (
    <div className="App">
      <Greet name="string" num={20} isLoggedIn={true}/>
      <Person name={name1}/>
      <PersonList nameList={nameList}/>
    </div>
  );
}

export default App;
