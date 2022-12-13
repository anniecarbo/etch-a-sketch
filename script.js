//Ici la fenetre pour que le joueur choissise la taille de la grille
let defaultSize = 16;

function popup() {
    const container = document.getElementById("grid");
    let allSquares = document.querySelectorAll(".square");
    let SquaresArray = [...allSquares];
    SquaresArray.forEach((square) => {
        container.removeChild(square);
    })
    resquestedSize = Math.min(prompt("Enter number of squares per side under 100"),100);
    makeAGrid(resquestedSize);
    }
    
//Ici pour que la grille soit formee selon le chiffre du joueur
function makeAGrid(sideSize) {
    let gridSize = sideSize * sideSize
    const container = document.getElementById("grid");

    container.style.setProperty('--grid-rows', sideSize);
    container.style.setProperty('--grid-cols', sideSize);

    for (c = 0; c < gridSize; c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "square";
      cell.addEventListener("mouseover", function() {
        cell.style.background = "black";
      })
    };
}

makeAGrid(defaultSize);