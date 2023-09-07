let count = 0
let countEl = document.getElementById("count-el")
let prevEl = document.getElementById("prev-ent")



function increment(){
    count = count + 1;
    countEl.textContent = count;
}

function save() {
    prevEl.textContent += count + " - ";
    count = 0;
    countEl.textContent = count
}


