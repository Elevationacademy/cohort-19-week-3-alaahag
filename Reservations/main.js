const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }


function checkReservation()
{
    let getname = document.getElementById("mytext").value;

    if (getname in reservations)
    {
        if (reservations[getname].claimed)
            node.innerText = "Hmm, someone already claimed this reservation";
        else
        {
            node.innerText = "Welcome " + getname;
            let input_tags = document.getElementsByTagName('input');
            for (let i of input_tags)
                i.style.display = 'none';
        }
    }
    else
        node.innerText = "You have no reservation";

    document.body.appendChild(node);
}

let node = document.createElement("h1");
document.getElementById("mybutton").onclick = checkReservation;