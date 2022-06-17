export default class TileCls {
  constructor(x, y, value = Math.random() < 0.5 ? 4 : 2) {
    this.x = x;
    this.y = y;
    this.value = value;
  }
}
