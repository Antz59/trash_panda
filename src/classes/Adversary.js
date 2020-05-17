import Creature from './Creature';

export default class Adversary extends Creature {
  constructor(location,movesPerTurn = 2, name = 'Bob') {
    super(location,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFqoCMf5yV4-6kQg3n0vHagGtV8YEbImHoBOldU2Bc68_0bujn&usqp=CAU',
    name
    );
    this.movesPerTurn = movesPerTurn;
  }
}