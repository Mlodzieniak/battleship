import createBoard from "./board";
import Gameboard from "../factories/gameboard";
import renderBoats from "./utils/renderBoats";

function entry(playerBoard) {
  const main = document.querySelector(".main");
  const entryScreen = document.createElement("dialog");
  //   const entryForm = document.createElement("form");
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
  const viablePlacedShips = [];

  function dropShip(shipsArr) {
    if (shipsArr.length === 0) {
      startBTN.classList.add("viable");
      //   startBTN.setAttribute("method", "modal");
      startBTN.onclick = () => {
        viablePlacedShips.forEach((place) => {
          playerBoard.placeShip(place.length, place.cords, place.horizontal);
        });
        const playerDOM = document.querySelector(".player");
        console.log(playerDOM);
        renderBoats(playerBoard, playerDOM);
        entryScreen.close();
        main.removeChild(entryScreen);
      };
      return;
    }
    const ship = document.createElement("div");
    for (let i = 0; i < shipsArr[0].size; i++) {
      const node = document.createElement("div");
      node.className = "cell ship";
      ship.appendChild(node);
    }
    const rotateBTN = document.createElement("button");
    rotateBTN.textContent = "Rotate";
    rotateBTN.onclick = () => {
      ship.classList.toggle("horizontal");
    };
    dock.append(ship, rotateBTN);
    cells.forEach((cell) => {
      cell.onclick = () => {
        let maxX = 9;
        let maxY = 9;
        if (!ship.classList.contains("horizontal")) {
          maxX -= shipsArr[0].size;
        } else {
          maxY -= shipsArr[0].size;
        }
        if (cell.dataset.xy[0] <= maxX + 1 && cell.dataset.xy[1] <= maxY + 1) {
          const cordsToCheck = [];
          for (let i = 0; i < shipsArr[0].size; i++) {
            if (ship.classList.contains("horizontal")) {
              cordsToCheck.push(parseInt(cell.dataset.xy, 10) + i);
            } else {
              cordsToCheck.push(parseInt(cell.dataset.xy, 10) + 10 * i);
            }
          }
          const mappedCords = cordsToCheck.map((cord) => {
            const string = cord.toString();
            if (string.length === 1) {
              return `0${string}`;
            }
            return string;
          });
          if (
            mappedCords.every((cord) => {
              const node = board.querySelector(`[data-xy="${cord}"]`);
              return !node.classList.contains("ship");
            })
          ) {
            mappedCords.forEach((cord) => {
              const node = board.querySelector(`[data-xy="${cord}"]`);
              node.classList.add("ship");
            });
            // console.log(shipsArr.splice(1, shipsArr.length - 1));
            dock.removeChild(ship);
            dock.removeChild(rotateBTN);
            const newShipData = {
              length: shipsArr[0].size,
              cords: [cell.dataset.xy[0], cell.dataset.xy[1]],
              horizontal: ship.classList.contains("horizontal"),
            };
            viablePlacedShips.push(newShipData);
            shipsArr[0].count -= 1;
            if (shipsArr[0].count === 0) {
              dropShip(shipsArr.splice(1, shipsArr.length - 1));
            } else {
              dropShip(shipsArr);
            }
          }
        }
      };
    });
  }
  dropShip(shipsInDock);

  /*
dropship(shipsindock){
dock renders single ship from array.
this ship is stored in var ship to place.
click board tryes to place it{
    max cords = take length of ship and subtract it from {
        if ship isHorizontal > width-length
        else > height - length
    }
    if clicked cell cords exceeds max cords then no effect
    else {
        check if clicked cell+ another cells along the way have class ship
        if they dont, fire placeShip function
    }
}
}

*/

  cells.forEach((cell) => {
    cell.addEventListener("dragover", (event) => {
      event.preventDefault();
      cell.classList.add("dragged-over");
    });
    cell.addEventListener("dragleave", () => {
      cell.classList.remove("dragged-over");
    });
    cell.addEventListener("drop", () => {
      cell.classList.remove("dragged-over");
      cell.classList.add("ship");
    });
  });

  box.append(dock, board);
  entryScreen.append(text, box, startBTN);
  //   entryScreen.append(entryForm);
  main.append(entryScreen);

  return entryScreen;
}
export default entry;
