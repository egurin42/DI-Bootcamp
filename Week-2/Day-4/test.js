let previousNumber = []
let prev = ''
let math = ''
function number(num) {
    previousNumber.push(num)
}
function operator(op){
    math = operator
    prev = parseInt(previousNumber.join(''))
    previousNumber = []
    console.log(prev);
}
function equal(eq) {
    if (math === '+') {
        console.log(prev+parseInt(previousNumber.join('')))
    } else if (math === '-') {
        console.log(prev-parseInt(previousNumber.join('')))
    }  else if (math === '*') {
        console.log(prev*parseInt(previousNumber.join('')))
    } else if (math === '/') {
        console.log(prev/parseInt(previousNumber.join('')))
    }
}