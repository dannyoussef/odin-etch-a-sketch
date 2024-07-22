const container = document.querySelector("#container");

function createGrid(gridSize) {
  for (i = 1; i <= gridSize; i++) {
    let row = container.appendChild(document.createElement("div"));
    for (j = 1; j <= gridSize; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      let resizedCell = 500 / gridSize;
      cell.style.width = parseFloat(resizedCell).toFixed(1) + "px";
      cell.style.height = parseFloat(resizedCell).toFixed(1) + "px";
      row.appendChild(cell);
    }
  }
}

createGrid(2);
