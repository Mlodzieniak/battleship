import Ship from "./ship";

function Gameboard() {
  const board = [];
  const ships = [];
  function cellFactory() {
    return {
      wasHit: false,
      hasShip: false,
      ship: null,
      symbol: "&#8226;", // bullet point if cells has no ship
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
      const x = parseInt(cords[0], 10);
      const y = parseInt(cords[1], 10);
      const cells = [];
      const newShip = Ship(length);
      const shipCords = [];
      if (!isHorizontal) {
        for (let i = 0; i < length; i++) {
          cells.push(board[x + i][y]);
          shipCords.push([x + i, y]);
        }
      } else {
        for (let i = 0; i < length; i++) {
          cells.push(board[x][y + i]);
          shipCords.push([x, y + i]);
        }
      }
      newShip.setCords(shipCords);
      cells.forEach((checkedCell) => {
        if (!checkedCell.hasShip) {
          checkedCell.ship = newShip;
          checkedCell.hasShip = true;
          checkedCell.symbol = "&#10005;";
        }
      });
      ships.push(newShip);
    },
    receiveAttack: (x, y) => {
      const attackedCell = board[x][y];
      if (attackedCell.wasHit) return "Try another cell.";
      if (attackedCell.hasShip) {
        attackedCell.wasHit = true;
        attackedCell.ship.hit();
        return attackedCell;
      }
      attackedCell.wasHit = true;
      return attackedCell;
    },
    isGameOver: (boardCells) => {
      let areSunk = 0;
      ships.forEach((checkedShip) => {
        if (checkedShip.isSunk()) {
          boardCells.forEach((cell) => {
            const cellID = [
              parseInt(cell.dataset.xy[0], 10),
              parseInt(cell.dataset.xy[1], 10),
            ];
            checkedShip.cords.forEach((cord) => {
              if (
                cord.some(
                  (cords) => cords[0] === cellID[0] && cords[1] === cellID[1]
                )
              ) {
                cell.classList.add("shot");
              }
            });
          });
          areSunk++;
        }
      });
      return areSunk === ships.length;
    },
  };
  return Object.create(methods);
}
export default Gameboard;
// module.exports = Gameboard;
