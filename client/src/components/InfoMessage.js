import React from 'react';

const InfoMessage = ({ type, text }) => {
  return (
    <h5 style={{marginBottom: '20px', backgroundColor: 'rgba(0,0,0,0.1'}}>
      { text }
    </h5>
  );
}

export default InfoMessage;