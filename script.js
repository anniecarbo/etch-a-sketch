//Ici la fenetre pour que le joueur choissise la taille de la grille
let playerPrompt = prompt("Enter number of squares per side");
let gridSize = playerPrompt * playerPrompt



    
//Ici pour que la grille soit formee selon le chiffre du joueur
const container = document.getElementById("grid");

function makeRows(rows, cols) {
  grid.style.setProperty('--grid-rows', rows);
  grid.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    grid.appendChild(cell).className = "square";
  };
};

makeRows(playerPrompt, playerPrompt);


// Ici la creation de la grille par defaut

// Black hover 
let elem = document.getElementsByClassName('square');
let elemArray = [...elem];

elemArray.forEach((item) => {
    item.addEventListener("mouseover", function() {
        item.style.background = "black";
    })
})




