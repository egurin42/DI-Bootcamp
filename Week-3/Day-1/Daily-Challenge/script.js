let planetArray = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];

for (i in planetArray){
    let div = document.createElement('div');
    div.setAttribute('class', `planet ${planetArray[i]}`);
    document.body.appendChild(div);
    if (i < 8){
    document.getElementsByClassName('planet')[i].style.marginBottom = "50px"
    }
}

document.getElementsByClassName('planet')[0].style.background = "#DBCECA";
document.getElementsByClassName('planet')[0].innerHTML = "Mercury";

document.getElementsByClassName('planet')[1].style.background = "#8B7D82";
document.getElementsByClassName('planet')[1].innerHTML = "Venus";

document.getElementsByClassName('planet')[2].style.background = "green";
document.getElementsByClassName('planet')[2].innerHTML = "Earth";

document.getElementsByClassName('planet')[3].style.background = "#BC2732";
document.getElementsByClassName('planet')[3].innerHTML = "Mars";

document.getElementsByClassName('planet')[4].style.background = "#E2C58C";
document.getElementsByClassName('planet')[4].innerHTML = "Jupiter";

document.getElementsByClassName('planet')[5].style.background = "#FFC489";
document.getElementsByClassName('planet')[5].innerHTML = "Saturn";

document.getElementsByClassName('planet')[6].style.background = "#4FD0E7";
document.getElementsByClassName('planet')[6].innerHTML = "Uranus";

document.getElementsByClassName('planet')[7].style.background = "#3b65d8";
document.getElementsByClassName('planet')[7].innerHTML = "Neptune";

document.getElementsByClassName('planet')[8].style.background = "#968570";
document.getElementsByClassName('planet')[8].innerHTML = "Pluto";

function moonPlacement(planetIndex, numOfMoons){
    for (i = 0; i < numOfMoons; i++){
        let div = document.createElement('div');
        div.setAttribute('class', 'moon');
        document.body.getElementsByClassName('planet')[planetIndex].appendChild(div);
        if (i == 0){
        document.body.getElementsByClassName('planet')[planetIndex].getElementsByClassName('moon')[i].style.marginLeft = "200px";
        }
        else{
            let spacing = 100;
            spacing *= (i+1);
            document.body.getElementsByClassName('planet')[planetIndex].getElementsByClassName('moon')[i].style.marginLeft = `${spacing}px`;
        }
    }
}

moonPlacement(2, 1)
moonPlacement(3, 2)
moonPlacement(4, 79)
moonPlacement(5, 62)
moonPlacement(6, 27)
moonPlacement(7, 14)
moonPlacement(8, 5)