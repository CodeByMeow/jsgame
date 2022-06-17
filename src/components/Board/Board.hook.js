import { useEffect } from 'react';
import CellCls from '../Cell/Cell.hook';
import TileCls from '../Tile/Tile.hook';

const keyMove = {
  up: "ArrowUp",
  down: "ArrowDown",
  left: "ArrowLeft",
  right: "ArrowRight",
}

export default class BoardCls {
  constructor(size) {
    this.cells = createCellElelment(size).map((_, index) =>
      new CellCls(
        index % size, Math.floor(index / size)
      )
    );
  }

  get emptyCells() {
    return this.cells.filter(cell => cell.tile == null);
  }

  get randomEmptyCell() {
    const randomeIndex = Math.floor(Math.random() * this.emptyCells.length);
    return this.emptyCells[randomeIndex];
  }

  addNewTile() {
    const cell = this.randomEmptyCell;
    cell.tile = new TileCls(cell.x, cell.y, Math.random() < 0.5 ? 4 : 2);
  }

  get tiles() {
    return this.cells.filter(cell => cell.tile != null);
  }

  getCellsByColum() {
    return this.cells.reduce((cellGrid, cell) => {
      cellGrid[cell.x] = cellGrid[cell.x] || [];
      cellGrid[cell.x][cell.y] = cell;
      return cellGrid;
    }, []);
  }

}

function createCellElelment(size) {
  return Array(size * size).fill();
}

export const useEvent = (event, handler, passive) => {
  useEffect(
    () => {
      window.addEventListener(event, handler, passive);
      return () => window.removeEventListener(event, handler);
    }
  )
}

export const handleKeyDown = (e, grid) => {
  switch(e.key) {
    case keyMove.up:
      moveUp(grid);
      break;
    case keyMove.down: 
      console.log(e.key)
      break;
    case keyMove.left: 
      console.log(e.key)
      break;
    case keyMove.right: 
      console.log(e.key)
      break;
  }
}

function moveUp(grid) {
  console.log(grid);
}
