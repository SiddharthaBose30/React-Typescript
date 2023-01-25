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
function App() {
  const name1={FName:"Lionel",Lname:"Messi"}
  const nameList=[{f:"Lionel",l:"Messi"},{f:"Kylian",l:"Mbappe"},{f:"Neymar",l:"Jr."}]
  return (
    <div className="App">
      <Greet name="string" num={20} isLoggedIn={true}/>
      <Person name={name1}/>
      <PersonList nameList={nameList}/>
      <Loading value='In Progress'></Loading>
      <Props2>YES</Props2>
      <Props3><Props2>YES2</Props2></Props3>

    </div>
  );
}

export default App;
