let currentNum = "";
let OGNum = 0;
let oppa = "";
let finalNum = 0;

function number(num){
    currentNum += `${num}`;
    console.log(currentNum);
}

function operator(op){
    parseInt(currentNum);
    OGNum = currentNum;
    curentNum = "";
    oppa = op;
    console.log(`currentNum: ${currentNum}`);
    console.log(`OGNum: ${OGNum}`);
}

function equal(){
    currentNum = parseInt(currentNum);
    OGNum = parseInt(OGNum);

    console.log(OGNum);

    if (oppa == "+"){
        finalNum = OGNum + currentNum;
    }
    else if (oppa == "-"){
        finalNum = OGNum - currentNum;
    }
    else if (oppa == "/"){
        if (currentNum != 0 || OGNum != 0){
            finalNum = OGNum / currentNum;
        }
    }
    else if (oppa == "*"){
        finalNum = OGNum * currentNum;
    }
    console.log(finalNum);
    currentNum = finalNum;
}