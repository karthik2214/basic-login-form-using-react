import React, { useState } from 'react';

const App = () => {
  
  const [name, setName] = useState();
  
  const [fullName, setFullName] = useState();
  
  const changeValue = (event) => {
    setName(event.target.value);
  }
  
  const FullName = () => {
    setFullName(name);
  }
  
  return (
    <>
    <div>
    <h1> Hello {fullName} </h1>
    <input type="text" placeHolder="Enter Your Name" onChange={changeValue} value={name}/>
    <button onClick={FullName}> Click here </button>
    </div>
    </>
    );
}

export default App;