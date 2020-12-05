import React, { useState } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
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
  
  const charsList = userInput.inputText.split('').map(el => {
    return (
      <Char
        character={el}
      />
    );
  })
  
  return (
    <div className="App">
      <input
        type="text"
        value={userInput.inputText}
        onChange={changeUserInput} />
      <p>{userInput.inputText.length}</p>
      <Validation inputLenght={userInput.inputText.length} />
      {charsList}
    </div>
  );
}

export default App;
