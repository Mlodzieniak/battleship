function createBoard(player) {
  const board = document.createElement("dev");
  board.className = `gameboard ${player}`;

  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    board.appendChild(cell);
    let xy = i.toString(10);
    if (xy.length === 1) {
      xy = `0${xy}`;
    }
    cell.setAttribute("data-xy", xy);
    cell.onmouseenter = () => {
      cell.classList.add("mouseover");
    };
    cell.onmouseout = () => {
      cell.classList.remove("mouseover");
    };
  }

  return board;
}
export default createBoard;
