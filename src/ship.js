function ship(newLength) {
  const length = newLength;
  let lives = newLength;
  const methods = {
    get length() {
      return length;
    },
    hit: () => {
      lives--;
      return lives;
    },
    isSunk: () => lives < 1,
  };
  const obj = Object.create(methods);
  return obj;
}
module.exports = ship;
