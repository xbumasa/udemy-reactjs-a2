import React from 'react';
import './Validation.css';

const Validation = props => {
  const validationText = props.inputLenght >= 5 ? 'Text long enough' : 'Text too short';
  return (
    <div className="Validation">
      <p>{validationText}</p>
    </div>
  );
}

export default Validation;
