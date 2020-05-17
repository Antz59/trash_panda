export default class Item {
  constructor(type, name) {
    var validTypes = [
      'bread',
      'meat',
      'condiment',
      'greens',
      'veggies',
      'cheese'
    ];
    if(!(type in validTypes)){
      throw('INVALID TYPE:', type)
    }
    this.type = type;
    this.name = name;
  }
}