console.log('here');

import './style.css';

import Game from './classes/Game';

const game = new Game('game');

document.body.addEventListener('keydown', (event) => {
  switch (event.keyCode) { 
    case 37:
      console.log('Left Key pressed!');
      break;
    case 38:
      console.log('Up Key pressed!');
      break;
    case 39:
      console.log('Right Key pressed!');
      break;
    case 40:
      console.log('Down Key pressed!');
      break;
    default:
      break;  
  }
});
