import { genRandNum } from '../utils';
import Location from './Location';
import Raccoon from './Raccoon';
import Adversary from './Adversary';
import TrashCans from './TrashCan';

export default class Game {
  constructor(gameId) {
    this.gameId = gameId;
    this.status = 'new';
    this.grid = Array(8)
                  .fill(null)
                  .map(() => Array(8).fill(null));
    console.table(this.grid);

    const startingLocs = this.genStartLocs();
    this.trashCans = Array(5)
      .fill(null)
      .map((_,idx) => new TrashCans(startingLocs[idx]));
    this.raccoon = new Raccoon(startingLocs[5], 'Jerry');
    this.adversary = new Adversary(startingLocs[6]);

    this.grid[this.raccoon.location.y][this.raccoon.location.x] = this.raccoon;
    this.trashCans.forEach(
      (tc) => (this.grid[tc.location.y][tc.location.x] = tc)
    );
    this.grid[this.adversary.location.y][this.adversary.location.x] = this.adversary;

    this.populateGrid();
  

  genStartLocs(); {
    const genLoc = () => `${genRandNum(0,7)}${genRandNum(0,7)}`;
    const randLocs = [];
    while(randLocs.length < 7) {
      const randloc = genLoc();
      if(!(randloc in randLocs)) {
        randLocs.push(randloc);
      }
    }
    return randLocs.map(loc => new Location(loc[1], loc[0]));
  }

  
  populateGrid(); {
    const game = document.getElementById(this.gameId);
    const gridDOM = game.querySelector('.grid');

    gridDOM.innerHTML = '';

    for(let rowIdx = 0; rowIdx < 8; rowIdx++) {
      const row = document.createElement('div');
      row.classList.add('row');
      for(let colIdx = 0; colIdx < 8; colIdx++) {
        const cell = document.createElement('div');m
        cell.classList.add('cell');
        row.appendChild(cell);
      }
      gridDOM.appendChild(row);
    }
  }
}
