import winner from "../winner";

function checkWinner(player, enemyBoard, boardCells) {
  if (enemyBoard.isGameOver(boardCells)) {
    winner(player).showModal();
  }
}
export default checkWinner;
