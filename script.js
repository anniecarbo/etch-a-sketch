// Grille de 16x16

let square = document.createElement("div");
square.classList.add("square");

let divClone = square.cloneNode(true);

function appendNCopies(n, original, appendTo) {
    for(var i = 0; i < n; i++) {
        var clone = original.cloneNode(true);
        appendTo.appendChild(clone);
    }
}

appendNCopies(256, square, document.getElementById("grid"));

