import React from 'react';

const Validation = (props) => {
  const validationText = props.inputLenght >= 5 ? 'Text long enough' : 'Text too short';
  
  return (
    <div className="Validation">
      {validationText}
    </div>
  );
}

export default Validation;
