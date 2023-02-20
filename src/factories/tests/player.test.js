const Player = require("../player");
const Gameboard = require("../gameboard");
const Ship = require("../ship");

describe("checking player type", () => {
  test("throws error if argument !== boolean", () => {
    //   const player = Player("True");
    expect(() => Player("true")).toThrow(Error);
  });
  test("player is computer", () => {
    const player = Player(true);
    expect(player.isComputer).toBe(true);
  });
  test("player is human", () => {
    const player = Player(false);
    expect(player.isComputer).toBe(false);
  });
});

describe("players make moves", () => {
  const player = Player(true);
  const gameboard = Gameboard();
  gameboard.placeShip(3, [2, 2], true);
  const ship = Ship(3);
  test("computer makes move", () => {
    expect(player.move(gameboard, [1, 1])).toBe(null);
  });
  test("computer makes same move twice", () => {
    expect(player.move(gameboard, [1, 1])).toBe(
      "You cannot hit same cell twice"
    );
  });
  test("computer hits target", () => {
    expect(player.move(gameboard, [2, 2])).toMatchObject(ship);
  });
});
describe("player makes radnom move", () => {
  const player = Player(true);
  const gameboard = Gameboard();
  const ship = Ship(1);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      gameboard.receiveAttack(i, j);
    }
  }
  gameboard.board[5][5].wasHit = false;
  gameboard.placeShip(1, [5, 5], false);
  test("computer makes move", () => {
    expect(player.randomMove(gameboard)).toMatchObject(ship);
  });
});
