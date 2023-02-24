import createBoard from "./board";

function createMain() {
  const main = document.querySelector(".main");
  const header = document.querySelector(".header");
  const footer = document.querySelector("footer");
  const left = document.createElement("div");
  const right = document.createElement("div");
  const leftName = document.createElement("h1");
  const rightName = document.createElement("h1");
  const title = document.createElement("h1");

  leftName.textContent = "Your board";
  rightName.textContent = "Enemy's board";
  title.textContent = "Battleships";
  footer.innerHTML =
    "<p>Created by <a href='https://github.com/Mlodzieniak/battleship'>@Mlodzieniak</a> for OdinProjects</p>";
  title.classList.add("title");
  left.appendChild(leftName);
  left.appendChild(createBoard("player"));
  right.appendChild(rightName);
  right.appendChild(createBoard("computer"));
  left.classList.add("flex-ver");
  right.classList.add("flex-ver");
  header.append(title);
  main.append(left, right);
  return main;
}
export default createMain;
