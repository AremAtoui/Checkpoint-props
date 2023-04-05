import './App.css';
import React from 'react';
import FullName from "./Profile/Profile component/FullName";
import Bio from './Profile/Profile component/Bio';
import Profession from './Profile/Profile component/Profession';
function App() {
  const name = "Arem";
  const age = 26;


  return (
    <div className="App" style={{backgroundColor:"gray"}}>


      <FullName name={name} age={age} />
      <Bio />
      <Profession />

    </div>
  );
}

export default App;
