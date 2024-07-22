const container = document.querySelector("#container");

function createGrid(gridSize) {
  let resizedCell = 500 / gridSize;

  for (i = 1; i <= gridSize; i++) {
    let row = container.appendChild(document.createElement("div"));
    for (j = 1; j <= gridSize; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");

      cell.style.width = parseFloat(resizedCell).toFixed(1) + "px";
      cell.style.height = parseFloat(resizedCell).toFixed(1) + "px";

      row.appendChild(cell);
    }
  }
  adjustCellSize();
}

function adjustCellSize() {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "black";
    });
  });
}

function promptUserForGridSize() {
  let gridSizeButton = document.querySelector("#grid-size-btn");

  gridSizeButton.addEventListener("click", () => {
    let gridSize = prompt("Enter a grid size (1 to 100): ");
    if (gridSize < 1 || gridSize > 100) {
      alert("Invalid size.");
    } else {
      let gridCells = document.querySelectorAll(".cell");
      gridCells.forEach((gridCell) =>
        gridCell.parentNode.removeChild(gridCell)
      );
      createGrid(gridSize);
    }
  });
}

createGrid(16);
promptUserForGridSize();
