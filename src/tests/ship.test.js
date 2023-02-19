const ship = require("../ship");

test("test1", () => {
  const ship1 = ship();
  expect(ship1.hit()).toBe("HIT");
});
