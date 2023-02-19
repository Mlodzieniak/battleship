const Ship = require("../ship");

test("ship returns length", () => {
  const ship1 = Ship(4);
  expect(ship1.length).toBe(4);
});
test("hit removes lives", () => {
  const ship1 = Ship(4);
  expect(ship1.hit()).toBe(3);
  expect(ship1.hit()).toBe(2);
});
test("is not sunk when >0 lives", () => {
  const ship1 = Ship(1);
  expect(ship1.isSunk()).toBe(false);
});
test("is sunk when <1 lives", () => {
  const ship1 = Ship(1);
  ship1.hit();
  expect(ship1.isSunk()).toBe(true);
});
