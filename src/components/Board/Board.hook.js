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

  cellsByColum() {
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

function moveUp(cells) {
  slideTiles(cells);
}

function slideTiles(cells) {
    cells.forEach(group => {
    for(let i = 1; i < group.length; i++) {
      const cell = group[i];
      if (cell.tile == null) continue;
      let lastValidCell;
      for (let j = i - 1; j >= 0; j--) {
        const moveToCell = group[j];
        if (!moveToCell.canAccept(cell)) break;
        lastValidCell = moveToCell;
      }

      if (lastValidCell != null) {
        if (lastValidCell.tile != null) {
          lastValidCell.mergeTile = cell.tile;
        } else {
          lastValidCell.tile = cell.tile;
        }
      }

      cell.tile = null;
    }
  })
}
