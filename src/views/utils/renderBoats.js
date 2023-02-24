function renderBoats(boardObj, boardDOM) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = boardObj.board[i][j];
      if (cell.hasShip) {
        const xy = i.toString() + j.toString();
        const target = boardDOM.querySelector(`[data-xy="${xy}"]`);
        target.classList.add("ship");
      }
    }
  }
}
export default renderBoats;
