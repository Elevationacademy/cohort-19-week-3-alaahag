let container = document.getElementById('container');

const randomColor = function()
{
    let r = Math.floor(Math.random() * (255+1));
    let g = Math.floor(Math.random() * (255+1));
    let b = Math.floor(Math.random() * (255+1));
    let rgbString = r + ", " + g + ", " + b;
    return 'rgb(' + rgbString + ')';
};

for (let i=0; i<6; i++)
{
    let box = document.createElement("div");

    let color_in = randomColor();
    let color_hover = randomColor();

    box.className = "box";
    box.style.backgroundColor = color_in;
    box.onmouseover = function()
    {
        this.style.backgroundColor = color_hover;
    };
    box.onmouseout = function()
    {
        this.style.backgroundColor = color_in;
    };
    container.appendChild(box);
}

let boxes = document.getElementsByClassName('box');
let counter_match = true;
for (let i=1; i<boxes.length; i++)
{
    if (boxes[0].style.backgroundColor !== boxes[i].style.backgroundColor)
    {
        counter_match = false;
        break;
    }
}

if (counter_match)
{
    let body = document.getElementsByTagName('body')[0];
    let h1 = document.createElement("h1");
    h1.innerText = "Match!";
    body.appendChild(h1);
}