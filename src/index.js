import "./style.css";
import createMain from "./views/main";
import Player from "./factories/player";
import Gameboard from "./factories/gameboard";
import renderBoats from "./views/utils/renderBoats";

createMain();
const computer = Player(true);
const computerBoard = Gameboard();
const computerDOM = document.querySelector(".computer");
computerBoard.placeShip(5, [0, 0], true);
computerBoard.placeShip(3, [5, 5], false);
renderBoats(computerBoard, computerDOM);

const player = Player(false);
const playerBoard = Gameboard();
const playerDOM = document.querySelector(".player");
playerBoard.placeShip(2, [3, 1], false);
playerBoard.placeShip(1, [9, 9], true);

renderBoats(playerBoard, playerDOM);

playerBoard.placeShip(5, [3, 6], true);
playerBoard.placeShip(3, [7, 1], false);
