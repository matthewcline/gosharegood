import React from 'react';
import { rgba } from 'style-value-types';

const styles = {
  "error": {
    backgroundColor: '#FFCDD2',
    color: '#B71C1C'
  }
}
const InfoMessage = ({ type, text }) => {
  return (
    <h5 className="rounded" style={{...styles[type], marginBottom: '20px', padding: '10px'}}>
      { text }
    </h5>
  );
}

export default InfoMessage;