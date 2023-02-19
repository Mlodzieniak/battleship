function ship() {
  const methods = {
    hit: () => "HIT",
  };
  const obj = Object.create(methods);
  return obj;
}
module.exports = ship;
