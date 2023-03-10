import play from "../index";

function winner(player) {
  const main = document.querySelector(".main");
  const box = document.createElement("dialog");
  box.classList.add("winner");
  const text = document.createElement("div");
  text.textContent = `${player.name()} wins the game.`;
  const newGameBTN = document.createElement("button");
  newGameBTN.classList.add("new-game-btn");
  newGameBTN.textContent = "New game";
  newGameBTN.onclick = () => {
    box.close();
    main.innerHTML = "";
    play();
  };
  box.append(text, newGameBTN);
  main.appendChild(box);
  return box;
}
export default winner;
