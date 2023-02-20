import Ship from "./ship";

function Gameboard() {
  const board = [];
  const ships = [];
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
    get board() {
      return board;
    },
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
      ships.push(newShip);
    },
    receiveAttack: (x, y) => {
      const attackedCell = board[x][y];
      if (attackedCell.wasHit) return "You cannot hit same cell twice";
      if (attackedCell.hasShip) {
        attackedCell.wasHit = true;
        attackedCell.ship.hit();
        return attackedCell.ship;
      }
      attackedCell.wasHit = true;
      return null;
    },
    isGameOver: () => {
      let areSunk = 0;
      ships.forEach((checkedShip) => {
        if (checkedShip.isSunk()) areSunk++;
      });
      return areSunk === ships.length;
    },
  };
  return Object.create(methods);
}
module.exports = Gameboard;
