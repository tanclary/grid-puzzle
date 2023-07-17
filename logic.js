displayId();
// displays the id
function displayId() {
    for (let i = 1; i <= 15; i++) {
        document.getElementById(i.toString()).innerHTML = i
    }
}

// yep bad
document.getElementById("shuffle").addEventListener("click", shuffle);
addTileListeners();

function shuffle() {
    // dont ask. it shuffles the tiles or something.
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    for (let i = 1; i <= 15; i++) {
        let pos = Math.floor(arr.length * Math.random())
        document.getElementById(i).innerHTML = arr[pos]
        arr.splice(pos, 1)
    }
}

function addTileListeners() {
    // just really bad way of adding a listener to each tile
    for (let i = 1; i <= 16; i++) {
        document.getElementById(i).addEventListener("click", swap);
    }
}

function swap(event) {
    // cheap and frankly awful logic for swapping the elements. dont ask 
    // me how it works because i dont know. its a miracle if it works at all..
    // i will say using 1-based id was one of the worst id-eas ive ever had. pun
    let id = parseInt(event.target.id)
    let row = Math.floor((id - 1) / 4) + 1
    let col = (id - 1) % 4 + 1
    let top = row-1 < 1 ? -1 : (row - 2) * 4 + col
    let bottom = row+1 < 1 || row+1 > 4 ? -1 : row * 4 + col
    let left = col-1 < 1 ? -1 : (row - 1) * 4 + (col - 1)
    let right = col+1 > 4 ? -1 : (row - 1) * 4 + (col + 1)
    let arr = [top, bottom, left, right]
    let swapId = -1;
    arr.forEach(element => {
        if (document.getElementById(element)?.innerHTML == "") {
            swapId = element;
        }
    })
    if (swapId != -1) {
        let val = document.getElementById(id).innerHTML
        document.getElementById(swapId).innerHTML = val
        document.getElementById(id).innerHTML = ""
    }
}