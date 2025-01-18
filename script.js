const GRID = 16;
let container = document.querySelector("#grid-container");

function generateGrid() {
  for (i = 0; i < GRID; i++) {
    let row = document.createElement("div");
    row.className = "row";
    row.style.display = "flex";
    container.appendChild(row);

    for (j = 0; j < GRID; j++) {
      let column = document.createElement("div");
      column.className = "column";
      column.style.width = "50px";
      column.style.height = "37.5px";
      column.style.flex = "1 0 auto";
      column.style.borderStyle = "solid";
      column.addEventListener("mouseenter", () => {
        column.style.backgroundColor = "red";
      });

      row.appendChild(column);
    }
  }
}

generateGrid();
