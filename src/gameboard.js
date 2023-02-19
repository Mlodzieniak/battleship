import Ship from "./ship";

function Gameboard() {
  const board = [];
  function cellFactory() {
    return {
      wasHit: false,
      hasShip: false,
      ship: null,
    };
  }
  for (let i = 0; i < 10; i++) {
    board.push([]);
    for (let j = 0; j < 10; j++) {
      board[i][j] = cellFactory();
    }
  }
  const methods = {
    hasShipAt: (x, y) => board[x][y].hasShip,
    placeShip: (length, cords, isHorizontal) => {
      const x = cords[0];
      const y = cords[1];
      const cells = [];
      const newShip = Ship(length);
      if (isHorizontal) {
        for (let i = 0; i < length; i++) {
          cells.push(board[x + i][y]);
        }
      } else {
        for (let i = 0; i < length; i++) {
          cells.push(board[x][y + i]);
        }
      }
      cells.forEach((checkedCell) => {
        if (!checkedCell.hasShip) {
          checkedCell.ship = newShip;
          checkedCell.hasShip = true;
        }
      });
    },
    // receiveAttack:(x,y)=>{

    // }
  };
  const obj = Object.create(methods);
  return obj;
}
module.exports = Gameboard;
/*

*/
