import createBoard from "./board";
import Gameboard from "../factories/gameboard";

function entry() {
  const main = document.querySelector(".main");

  const entryScreen = document.createElement("dialog");
  const box = document.createElement("div");
  box.classList.add("dock-wrapper");
  entryScreen.classList.add("entry");
  const dock = document.createElement("div");
  dock.classList.add("dock");
  const text = document.createElement("div");
  const startBTN = document.createElement("button");
  startBTN.textContent = "Start game";
  text.innerHTML = "Place your ships.";
  const board = createBoard();
  board.classList.add("entry-board");
  const cells = board.querySelectorAll(".cell");

  const shipsInDock = [
    {
      name: "Carrier",
      size: 5,
      count: 1,
    },
    {
      name: "Battleship",
      size: 4,
      count: 1,
    },
    {
      name: "Cruiser",
      size: 3,
      count: 1,
    },
    {
      name: "Destroyer",
      size: 2,
      count: 2,
    },
    {
      name: "Submarine",
      size: 1,
      count: 2,
    },
  ];

  shipsInDock.forEach((type) => {
    for (let i = 0; i < type.count; i++) {
      const ship = document.createElement("div");
      for (let j = 0; j < type.size; j++) {
        const node = document.createElement("div");
        node.className = "cell ship";
        ship.appendChild(node);
      }
      //   ship.setAttribute("data-rotation", "vertical");
      ship.setAttribute("draggable", "true");
      ship.classList.add("draggable");

      ship.ondblclick = () => {
        ship.classList.toggle("rotated");
        // ship.removeAttribute("data-rotation");
      };

      ship.addEventListener("dragstart", () => {
        ship.classList.add("hold");
        setTimeout(() => ship.classList.add("invisible"), 0);
      });

      ship.addEventListener("dragend", () => {
        ship.classList.remove("hold");
        ship.classList.remove("invisible");
      });
      dock.appendChild(ship);
    }
  });
  function isIntersected(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();
    return !(
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom ||
      rect1.right < rect2.left ||
      rect1.left > rect2.right
    );
  }
  board.addEventListener("dragenter", (event) => {
    cells.forEach((cell) => {
      if (isIntersected(cell, event.target)) {
        cell.classList.add("dragged-over");
      }
    });
  });
  board.addEventListener("dragover", (event) => {
    cells.forEach((cell) => {
      if (isIntersected(cell, event.target)) {
        cell.classList.add("dragged-over");
      } else {
        cell.classList.remove("dragged-over");
      }
    });
  });
  board.addEventListener("dragleave", () => {
    cells.forEach((cell) => {
      cell.classList.remove("dragged-over");
    });
  });

  //   cells.forEach((cell) => {
  //     cell.addEventListener("dragover", (event) => {
  //       event.preventDefault();
  //       cell.classList.add("dragged-over");
  //     });
  //     cell.addEventListener("dragleave", () => {
  //       cell.classList.remove("dragged-over");
  //     });
  //     cell.addEventListener("drop", () => {
  //       cell.classList.remove("dragged-over");
  //       cell.classList.add("ship");
  //     });
  //   });

  box.append(dock, board);
  entryScreen.append(text, box, startBTN);
  main.append(entryScreen);

  return entryScreen;
}
export default entry;
