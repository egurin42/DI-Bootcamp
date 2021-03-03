// HTML Elements
const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.gameCell');

// Game Variables
let gameIsLive = true;
let xIsNext = true;
let winner = null;

// Functions
function checkStatus(){
    const topLeft = cellDivs[0].classList[1];
    const topMid = cellDivs[1].classList[1];
    const topRight = cellDivs[2].classList[1];
    const midLeft = cellDivs[3].classList[1];
    const midMid = cellDivs[4].classList[1];
    const midRight = cellDivs[5].classList[1];
    const botLeft = cellDivs[6].classList[1];
    const botMid = cellDivs[7].classList[1];
    const botRight = cellDivs[8].classList[1];

    // Winner?
    if (topLeft && topLeft === topMid && topLeft === topRight){
        gameIsLive = false;
        winner = topLeft;
        if (topLeft === 'x'){
            statusDiv.innerHTML = `${topLeft} has won`;
            document.getElementsByClassName('status')[0].style.color = 'gold';
            document.getElementsByClassName('status')[0].style.fontWeight = 'bold';
        }
        else {
            statusDiv.innerHTML = `${topLeft} has won`;
            document.getElementsByClassName('status')[0].style.color = 'salmon';
            document.getElementsByClassName('status')[0].style.fontWeight = 'bold';
        }
    }

    else if (midLeft && midLeft === midMid && midLeft === midRight){
        gameIsLive = false;
        winner = midLeft;
        if (midLeft === 'x'){
            statusDiv.innerHTML = `${midLeft} has won`;
            document.getElementsByClassName('status')[0].style.color = 'gold';
            document.getElementsByClassName('status')[0].style.fontWeight = 'bold';
        }
        else {
            statusDiv.innerHTML = `${midLeft} has won`;
            document.getElementsByClassName('status')[0].style.color = 'salmon';
            document.getElementsByClassName('status')[0].style.fontWeight = 'bold';
        }
    }

    else if (botLeft && botLeft === botMid && botLeft === botRight){
        gameIsLive = false;
        winner = botLeft;
        if (botLeft === 'x'){
            statusDiv.innerHTML = `${botLeft} has won`;
            document.getElementsByClassName('status')[0].style.color = 'gold';
            document.getElementsByClassName('status')[0].style.fontWeight = 'bold';
        }
        else {
            statusDiv.innerHTML = `${botLeft} has won`;
            document.getElementsByClassName('status')[0].style.color = 'salmon';
            document.getElementsByClassName('status')[0].style.fontWeight = 'bold';
        }
    }

    else if (topLeft && topLeft === midLeft && topLeft === botLeft){
        gameIsLive = false;
        winner = topLeft;
        if (topLeft === 'x'){
            statusDiv.innerHTML = `${topLeft} has won`;
            document.getElementsByClassName('status')[0].style.color = 'gold';
            document.getElementsByClassName('status')[0].style.fontWeight = 'bold';
        }
        else {
            statusDiv.innerHTML = `${topLeft} has won`;
            document.getElementsByClassName('status')[0].style.color = 'salmon';
            document.getElementsByClassName('status')[0].style.fontWeight = 'bold';
        }
    }

    else if (topMid && topMid === midMid && topMid === botMid){
        gameIsLive = false;
        winner = topMid;
        if (topMid === 'x'){
            statusDiv.innerHTML = `${topMid} has won`;
            document.getElementsByClassName('status')[0].style.color = 'gold';
            document.getElementsByClassName('status')[0].style.fontWeight = 'bold';
        }
        else {
            statusDiv.innerHTML = `${topMid} has won`;
            document.getElementsByClassName('status')[0].style.color = 'salmon';
            document.getElementsByClassName('status')[0].style.fontWeight = 'bold';
        }
    }

    else if (topRight && topRight === midRight && topRight === botRight){
        gameIsLive = false;
        winner = topRight;
        if (topRight === 'x'){
            statusDiv.innerHTML = `${topRight} has won`;
            document.getElementsByClassName('status')[0].style.color = 'gold';
            document.getElementsByClassName('status')[0].style.fontWeight = 'bold';
        }
        else {
            statusDiv.innerHTML = `${topRight} has won`;
            document.getElementsByClassName('status')[0].style.color = 'salmon';
            document.getElementsByClassName('status')[0].style.fontWeight = 'bold';
        }
    }

    else if (topLeft && topLeft === midMid && topLeft === botRight){
        gameIsLive = false;
        winner = topLeft;
        if (topLeft === 'x'){
            statusDiv.innerHTML = `${topLeft} has won`;
            document.getElementsByClassName('status')[0].style.color = 'gold';
            document.getElementsByClassName('status')[0].style.fontWeight = 'bold';
        }
        else {
            statusDiv.innerHTML = `${topLeft} has won`;
            document.getElementsByClassName('status')[0].style.color = 'salmon';
            document.getElementsByClassName('status')[0].style.fontWeight = 'bold';
        }
    }

    else if (topRight && topRight === midMid && topRight === botLeft){
        gameIsLive = false;
        winner = topRight;
        if (topRight === 'x'){
            statusDiv.innerHTML = `${topRight} has won`;
            document.getElementsByClassName('status')[0].style.color = 'gold';
            document.getElementsByClassName('status')[0].style.fontWeight = 'bold';
        }
        else {
            statusDiv.innerHTML = `${topRight} has won`;
            document.getElementsByClassName('status')[0].style.color = 'salmon';
            document.getElementsByClassName('status')[0].style.fontWeight = 'bold';
        }
    }

    else if (topLeft && topMid && topRight && midLeft && midMid && midRight && botLeft && botMid && botRight){
        gameIsLive = false;
        statusDiv.innerHTML = 'Tie Game!';
        document.getElementsByClassName('status')[0].style.color = '#939393';
        document.getElementsByClassName('status')[0].style.fontWeight = 'bold';
    }

    else {
        xIsNext = !xIsNext;
        if (xIsNext){
            statusDiv.innerHTML = 'x is next';
            document.getElementsByClassName('status')[0].style.color = 'gold';
        }
        else {
            statusDiv.innerHTML = 'o is next';
            document.getElementsByClassName('status')[0].style.color = 'salmon';
        }
    }

};


// Event Handlers
const handleReset = () => {
    xIsNext = true;
    statusDiv.innerHTML = 'x is next';
    document.getElementsByClassName('status')[0].style.color = 'gold';
    document.getElementsByClassName('status')[0].style.fontWeight = 'normal';
    for (i of cellDivs){
        i.classList.remove('x');
        i.classList.remove('o');
        winner = null;
    }

}

const handleCell = (e) => {
    const classes = e.target.classList;

    if (xIsNext && classes[2] != 'x' && classes[2] != 'o'){
        classes.add('x');
        checkStatus();
    }
    else if (classes[2] != 'x' && classes[2] != 'o') {
        classes.add('o');
        checkStatus();
    }
}

// Event Listeners
resetDiv.addEventListener('click', handleReset);

for (cellDiv of cellDivs) {
    cellDiv.addEventListener('click', handleCell);
} 