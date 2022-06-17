export default class CellCls {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  canAccept(tile) {
    return (this.tile == null || this.mergeTile == null && this.tile.value == tile.value);
  }

  mergeTiles() {
    if (this.tile.value == null || this.mergeTile.value == null) return;
    this.tile.value = this.tile.value + this.mergeTile.value;
    this.mergeTile = null;
  }

}
