let planetArray = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];

for (i in planetArray){
    let div = document.createElement('div');
    div.setAttribute('class', `planet ${planetArray[i]}`);
    document.body.appendChild(div);
    if (i < 8){
    document.getElementsByClassName('planet')[i].style.marginBottom = "50px"
    }
}

// Mercury
document.getElementsByClassName('planet')[0].style.backgroundImage = "url('https://mk0astronomynow9oh6g.kinstacdn.com/wp-content/uploads/2016/08/Mercury_in_false_colour_Caloris_basin_1163x872.jpg')";
document.getElementsByClassName('planet')[0].style.borderRadius = "50%";
document.getElementsByClassName('planet')[0].style.backgroundSize = "160px";
document.getElementsByClassName('planet')[0].style.backgroundPosition = "center";

// Venus
document.getElementsByClassName('planet')[1].style.backgroundImage = "url('https://static.timesofisrael.com/www/uploads/2020/09/download.jpg')";
document.getElementsByClassName('planet')[1].style.borderRadius = "50%";
document.getElementsByClassName('planet')[1].style.backgroundSize = "300px";
document.getElementsByClassName('planet')[1].style.backgroundPosition = "center";

// Earth
document.getElementsByClassName('planet')[2].style.backgroundImage = "url('https://i1.wp.com/www.travindy.com/wp-content/uploads/2018/04/Planet-Earth-Article-Image.jpg?fit=1920%2C1920&ssl=1')";
document.getElementsByClassName('planet')[2].style.borderRadius = "50%";
document.getElementsByClassName('planet')[2].style.backgroundSize = "160px";
document.getElementsByClassName('planet')[2].style.backgroundPosition = "center";

// Mars
document.getElementsByClassName('planet')[3].style.backgroundImage = "url('https://space-facts.com/wp-content/uploads/mars.jpg')";
document.getElementsByClassName('planet')[3].style.borderRadius = "50%";
document.getElementsByClassName('planet')[3].style.backgroundSize = "150px";
document.getElementsByClassName('planet')[3].style.backgroundPosition = "center";

// Jupiter
document.getElementsByClassName('planet')[4].style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg')";
document.getElementsByClassName('planet')[4].style.borderRadius = "50%";
document.getElementsByClassName('planet')[4].style.backgroundSize = "160px";
document.getElementsByClassName('planet')[4].style.backgroundPosition = "center";

// Saturn
document.getElementsByClassName('planet')[5].style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg')";
document.getElementsByClassName('planet')[5].style.borderRadius = "50%";
document.getElementsByClassName('planet')[5].style.backgroundSize = "350px";
document.getElementsByClassName('planet')[5].style.backgroundPosition = "center";

// Uranus
document.getElementsByClassName('planet')[6].style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg')";
document.getElementsByClassName('planet')[6].style.borderRadius = "50%";
document.getElementsByClassName('planet')[6].style.backgroundSize = "260px";
document.getElementsByClassName('planet')[6].style.backgroundPosition = "center";

// Neptune
document.getElementsByClassName('planet')[7].style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg')";
document.getElementsByClassName('planet')[7].style.borderRadius = "50%";
document.getElementsByClassName('planet')[7].style.backgroundSize = "160px";
document.getElementsByClassName('planet')[7].style.backgroundPosition = "center";

// Pluto
document.getElementsByClassName('planet')[8].style.backgroundImage = "url('https://ichef.bbci.co.uk/news/976/cpsprodpb/B547/production/_84270464_p_lorri_fullframe_color.png')";
document.getElementsByClassName('planet')[8].style.borderRadius = "50%";
document.getElementsByClassName('planet')[8].style.backgroundSize = "200px";
document.getElementsByClassName('planet')[8].style.backgroundPosition = "center";

function moonPlacement(planetIndex, numOfMoons){
    for (i = 0; i <= numOfMoons; i++){
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