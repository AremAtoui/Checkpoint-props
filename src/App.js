import './App.css';
import React from 'react';
import FullName from "./Profile/Profile component/FullName";
import Bio from './Profile/Profile component/Bio';
import Profession from './Profile/Profile component/Profession';


function App() {
  const name = "Arem";
  const age = 26;
const handlealert=(x)=> alert(x);

  return (
    <div className="App" style={{backgroundColor:"gray"}}>


      <FullName name={name} age={age} handlealert={handlealert} />
      <Bio />
      <Profession />

    </div>
  );
}

export default App;
