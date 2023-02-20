import createBoard from "./board";

function createMain() {
  const main = document.querySelector(".main");
  const left = document.createElement("div");
  const right = document.createElement("div");
  const leftName = document.createElement("h1");
  const rightName = document.createElement("h1");
  leftName.textContent = "Your board";
  rightName.textContent = "Enemy's board";
  left.appendChild(leftName);
  left.appendChild(createBoard("player"));
  right.appendChild(rightName);
  right.appendChild(createBoard("computer"));
  main.append(left, right);
  return main;
}
export default createMain;
