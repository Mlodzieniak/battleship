function Player(isPlayerAComputer) {
  if (typeof isPlayerAComputer !== "boolean") {
    throw new Error("Invalid argument type. Expected boolean.");
  }
  const isComputer = isPlayerAComputer;
  // const hitCords = [];
  const methods = {
    get isComputer() {
      return isComputer;
    },
    name: () => (isComputer ? "Computer" : "Player"),
    move: (board, cords) => {
      const x = cords[0];
      const y = cords[1];
      // hitCords.push([x, y]);
      return board.receiveAttack(x, y);
    },
    randomMove: (board) => {
      const random = () => Math.floor(Math.random() * 10);
      while (true) {
        const x = random();
        const y = random();
        const checkedCell = board.board[x][y];
        if (checkedCell.wasHit) {
          continue;
        }
        return [`${x}${y}`, methods.move(board, [x, y])];
      }
    },
  };
  return Object.create(methods);
}
export default Player;
// module.exports = Player;
