import { useEffect, useState } from 'react';
import { Content } from './Board.style';
import BoardCls, { handleKeyDown, useEvent } from './Board.hook';
import Cell from '../Cell';
import Tile from '../Tile';

const Board = () => {
  const [board, setBoard] = useState(new BoardCls(4));
  const [cells, setCells] = useState([]);
  const [tiles, setTiles] = useState([]);
  
  useEffect(() => {
    board.addNewTile();
    board.addNewTile();
    const cells = board.cells.map((cell, index) => <Cell cell={cell} key={index} />);
    const tiles = board.tiles.map((cell, index) => <Tile cell={cell} key={index} />);
    setBoard(board);
    setCells(cells);
    setTiles(tiles);
  }, []);

  useEvent("keydown", (e) => handleKeyDown(e, board.cellsByColum()));

  return (
    <Content >
      {cells}
      {tiles}
    </Content>
  );
}

export default Board;
