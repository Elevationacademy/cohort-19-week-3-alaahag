const moveLeft = function(){
    let left = parseInt(block.style.left) || 0;
    left -= 15;
    block.style.left = left + "px";
};

const moveUp = function(){
    let up = parseInt(block.style.top) || 0;
    up -= 15;
    block.style.top = up + "px";
};

const moveDown = function(){
    let down = parseInt(block.style.top) || 0;
    down += 15;
    block.style.top = down + "px";
};

const moveRight = function(){
    let right = parseInt(block.style.left) || 0;
    right += 15;
    block.style.left = right + "px";
};

const block = document.getElementById("block");
document.getElementById("right").onclick = moveRight;
document.getElementById("down").onclick = moveDown;
document.getElementById("left").onclick = moveLeft;
document.getElementById("up").onclick = moveUp;

const subHeader = document.createElement("h2");
subHeader.innerHTML = "Game by: ~Ala~";
subHeader.setAttribute("class", "sub-header");
document.body.appendChild(subHeader);

const test = function (e){
    console.log(e.key);
    switch (e.key) {
        case "ArrowRight": moveRight(); break;
        case "ArrowLeft": moveLeft(); break;
        case "ArrowUp": moveUp(); break;
        case "ArrowDown": moveDown();
    }
};

document.body.addEventListener("keydown", event => { test(event); });