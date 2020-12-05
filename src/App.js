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
  
  const deleteChar = (index) => {
    const chars = userInput.inputText.split('');
    chars.splice(index, 1);
    setUserInputState({
      inputText: chars.join('')
    });
  }
  
  const charsList = userInput.inputText.split('').map((el, index) => {
    return (
      <Char
        key={index}
        character={el}
        clicked={deleteChar.bind(this, index)}
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
