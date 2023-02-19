const Gameboard = require("../gameboard");

test("cell returns no ships in their place", () => {
  const board = Gameboard();
  expect(board.hasShipAt(9, 9)).toBe(false);
  expect(board.hasShipAt(0, 0)).toBe(false);
  expect(board.hasShipAt(5, 5)).toBe(false);
  expect(board.hasShipAt(9, 0)).toBe(false);
});
test("cell returns ships in their place", () => {
  const board = Gameboard();
  expect(board.hasShipAt(5, 5)).toBe(false);

  board.placeShip(3, [5, 5], true);
  expect(board.hasShipAt(5, 5)).toBe(true);
  expect(board.hasShipAt(6, 5)).toBe(true);
  expect(board.hasShipAt(7, 5)).toBe(true);
  expect(board.hasShipAt(4, 5)).toBe(false);
  expect(board.hasShipAt(8, 5)).toBe(false);
});
// test("able to place ship", () => {
//   const board = Gameboard();
//   board.placeShip();
//   expect(board.receiveAttack());
// });
