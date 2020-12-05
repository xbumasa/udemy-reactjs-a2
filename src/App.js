import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [userInput, setUserInputState] = useState({
    inputText: ''
  });
  
  const changeUserInput = (event) => {
    setUserInputState({
      inputText: event.target.value
    });
  }
  
  return (
    <div className="App">
      <input
        type="text"
        value={userInput.inputText}
        onChange={changeUserInput} />
      <p>{userInput.inputText.length}</p>
    </div>
  );
}

export default App;
