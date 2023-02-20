function renderBoats(boardObj, boardDOM) {
  console.log(boardDOM);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = boardObj.board[i][j];
      if (cell.hasShip) {
        const xy = j.toString() + i.toString();
        console.log(xy);
        const target = boardDOM.querySelector(`[data-xy="${xy}"]`);
        target.classList.add("ship");
      }
    }
  }
}
export default renderBoats;
