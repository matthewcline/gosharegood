import posed from 'react-pose';

const PosedButton = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1.6,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.75,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  },
  press: {
    scale: 2.0,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  }
});

export default PosedButton;