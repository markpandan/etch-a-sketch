let grid = 16;
let sketchColor = "red";

let gridContainer = document.querySelector("#grid-container");
let setGridSize = document.querySelector("#setGridSize");
let colorSelection = document.querySelector("#color-selection");

setGridSize.addEventListener("click", () => {
  let promptGridSize;
  do {
    promptGridSize = prompt("Enter grid value (limit 100):");
  } while (promptGridSize > 100);

  grid = promptGridSize;
  gridContainer.replaceChildren();
  generateGrid();
});

colorSelection.addEventListener("click", (e) => {
  sketchColor = e.target.id;
});

function createBox() {
  let column = document.createElement("div");
  column.className = "column";
  column.addEventListener("mouseenter", () => {
    column.style.backgroundColor = sketchColor;
  });

  return column;
}

function generateGrid() {
  for (i = 0; i < grid; i++) {
    let row = document.createElement("div");
    row.className = "row";
    row.style.display = "flex";
    gridContainer.appendChild(row);

    for (j = 0; j < grid; j++) {
      let column = createBox();
      row.appendChild(column);
    }
  }
}

generateGrid();
