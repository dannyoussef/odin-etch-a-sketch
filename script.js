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
}

createGrid(16);

let cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("mouseover", () => {
    cell.style.backgroundColor = "black";
  });
});
