import winner from "../winner";

function checkWinner(player, enemyBoard) {
  if (enemyBoard.isGameOver()) {
    winner(player).showModal();
  }
}
export default checkWinner;
