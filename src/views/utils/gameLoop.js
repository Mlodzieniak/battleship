import Ship from "../../factories/ship";
import checkWinner from "./checkWinner";

function gameLoop(player, playerBoard, computer, computerBoard) {
  const computerCells = document.querySelectorAll(".computer>.cell");
  const playerCells = document.querySelectorAll(".player>.cell");

  computerCells.forEach((cell) => {
    cell.onclick = (event) => {
      const x = event.target.dataset.xy[0];
      const y = event.target.dataset.xy[1];
      const myAttack = player.move(computerBoard, [x, y]);
      if (myAttack !== "Try another cell.") {
        cell.innerHTML = myAttack.symbol;
        if (!checkWinner(player, computerBoard, computerCells)) {
          const comAttack = computer.randomMove(playerBoard);
          const comTarget = Array.from(playerCells).find(
            (cell) => cell.dataset.xy === comAttack[0]
          );
          comTarget.innerHTML = comAttack[1].symbol;
          if (checkWinner(computer, playerBoard, playerCells)) return;
        } else return;
      }
    };
  });
}
export default gameLoop;

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
