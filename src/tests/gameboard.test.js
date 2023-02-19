const Gameboard = require("../gameboard");

test("cell returns no ships in their place", () => {
  const board = Gameboard();
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      expect(board.hasShipAt(i, j)).toBe(false);
    }
  }
});
test("cell returns ships in their place-, hozizontal case", () => {
  const board = Gameboard();
  expect(board.hasShipAt(5, 5)).toBe(false);
  board.placeShip(3, [5, 5], true);
  expect(board.hasShipAt(5, 5)).toBe(true);
  expect(board.hasShipAt(6, 5)).toBe(true);
  expect(board.hasShipAt(7, 5)).toBe(true);
  expect(board.hasShipAt(4, 5)).toBe(false);
  expect(board.hasShipAt(8, 5)).toBe(false);
});
test("cell returns ships in their place-, vertical case", () => {
  const board = Gameboard();
  expect(board.hasShipAt(5, 5)).toBe(false);
  board.placeShip(3, [5, 5], false);
  expect(board.hasShipAt(5, 5)).toBe(true);
  expect(board.hasShipAt(5, 6)).toBe(true);
  expect(board.hasShipAt(5, 7)).toBe(true);
  expect(board.hasShipAt(5, 4)).toBe(false);
  expect(board.hasShipAt(5, 8)).toBe(false);
});
test("attack empty cell", () => {
  const board = Gameboard();
  expect(board.receiveAttack(0, 0)).toBe(null);
  expect(board.board[0][0]).toHaveProperty("wasHit", true);
});
test("attack cell with ship", () => {
  const board = Gameboard();
  board.placeShip(3, [5, 5], false);
  board.receiveAttack(5, 5);
  expect(board.board[5][5]).toHaveProperty("wasHit", true);
});
test("gameover after all ships are sunk", () => {
  const board = Gameboard();
  board.placeShip(2, [5, 5], true);
  board.placeShip(1, [0, 0], false);
  board.receiveAttack(5, 5);
  board.receiveAttack(6, 5);
  board.receiveAttack(0, 0);
  expect(board.isGameOver()).toBe(true);
});
test("no gameover if ships are alive", () => {
  const board = Gameboard();
  board.placeShip(2, [5, 5], true);
  board.placeShip(1, [0, 0], false);
  board.placeShip(2, [4, 0], false);
  board.receiveAttack(5, 5);
  board.receiveAttack(0, 0);
  expect(board.isGameOver()).toBe(false);
});
