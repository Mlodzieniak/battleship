function Ship(newLength) {
  const length = newLength;
  let lives = newLength;
  const cords = [];
  const methods = {
    get length() {
      return length;
    },
    hit: () => {
      lives--;
      return lives;
    },
    isSunk: () => lives < 1,
    setCords: (newCords) => {
      cords.push(newCords);
    },
    get cords() {
      return cords;
    },
  };
  const obj = Object.create(methods);
  return obj;
}
export default Ship;
// module.exports = Ship;
