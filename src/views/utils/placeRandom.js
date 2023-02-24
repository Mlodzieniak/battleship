import shipsData from "./shipsData";
import renderBoats from "./renderBoats";

function placeRandom(gameboard) {
  const computerDOM = document.querySelector(".computer");

  function singleShip(shipsList) {
    if (!shipsList.length) {
      return;
    }
    let maxX = 10;
    let maxY = 10;
    const isHorizontal = Math.floor(Math.random() * 2);
    if (!isHorizontal) {
      maxX -= shipsList[0].size;
    } else {
      maxY -= shipsList[0].size;
    }
    while (true) {
      const cordsToCheck = [
        Math.floor(Math.random() * maxX),
        Math.floor(Math.random() * maxY),
      ];
      const results = [];

      for (let i = 0; i < shipsList[0].size; i++) {
        if (!isHorizontal) {
          results.push(
            !gameboard.hasShipAt(cordsToCheck[0] + i, cordsToCheck[1])
          );
        } else {
          results.push(
            !gameboard.hasShipAt(cordsToCheck[0], cordsToCheck[1] + i)
          );
        }
      }
      if (results.every((result) => result)) {
        gameboard.placeShip(shipsList[0].size, cordsToCheck, isHorizontal);
        shipsList[0].count = shipsList[0].count - 1;
        if (shipsList[0].count < 1) {
          singleShip(shipsList.splice(1, shipsList.length - 1));
        } else {
          singleShip([...shipsList]);
        }
        break;
      }
    }
  }
  singleShip([...shipsData]);

  // renderBoats(gameboard, computerDOM);
}
export default placeRandom;
