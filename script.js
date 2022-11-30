// Grid 16x16

let cell = document.createElement("div");
cell.classList.add("square");

let divClone = cell.cloneNode(true);

function appendNCopies(n, original, appendTo) {
    for(var i = 0; i < n; i++) {
        var clone = original.cloneNode(true);
        appendTo.appendChild(clone);
    }
}

appendNCopies(256, cell, document.getElementById("grid"));

// Black hover 

let elem = document.getElementsByClassName('square');
let elemArray = [...elem];

elemArray.forEach((item) => {
    item.addEventListener("mouseover", function() {
        item.style.background = "black";
    })
})

