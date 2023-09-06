let count = 0
let countEl = document.getElementById("count-el")
let prevEl = document.getElementById("prev-ent")

function increment(){
    count = count + 1;
    countEl.innerText = count;
}

function save() {
    prevEl.innerText = prevEl.innerText + "-" + count;
}


