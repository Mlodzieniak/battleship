import "./style.css";
import createMain from "./views/main";
import Player from "./factories/player";
import Gameboard from "./factories/gameboard";
import renderBoats from "./views/utils/renderBoats";
import gameLoop from "./views/utils/gameLoop";
import entry from "./views/entry";

function play() {
  const computer = Player(true);
  const computerBoard = Gameboard();
  const computerDOM = document.querySelector(".computer");
  //   computerBoard.placeShip(3, [5, 5], false);
  const player = Player(false);
  const playerBoard = Gameboard();
  const playerDOM = document.querySelector(".player");
  createMain();
  entry(playerBoard).showModal();
  //   playerBoard.placeShip(2, [3, 1], false);
  //   playerBoard.placeShip(1, [9, 9], true);
  //   playerBoard.placeShip(5, [3, 6], true);
  //   playerBoard.placeShip(3, [7, 1], false);
  //   renderBoats(playerBoard, playerDOM);
  gameLoop(player, playerBoard, computer, computerBoard);
}
// while (true) {
play();
// }
// const newGameBTN = document.querySelector(".new-game-btn");
// newGameBTN.onclick = () => {
//   play();
// };
export default play;
/*
Game render 2 empty boards
player places his ships
click start button and at his moment computer places ships randomly on his board
Main loop while(!isGameOver){
    player makes move:
    if attack returns null 
    - it end of the turn
    - places big dot in cell
    if attack return 'Try another cell' player makes move
    if attack returns ship:
    - ship receives hit
    - cell content is cross
    - player makes move
    -if ship sunks bg color red and check for game over
}
*/
