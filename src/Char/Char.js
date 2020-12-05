import React from 'react';

const Char = props => {
  const css = {
    display: 'inline',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
  };
  
  return (
    <div style={css} className="Char">
      {props.character}
    </div>
  );
}

export default Char;
