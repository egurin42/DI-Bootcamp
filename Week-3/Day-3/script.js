// function changeBG() {
//     let color = document.getElementById('bg');

//     if (color.style.backgroundColor === 'blue'){
//         color.style.backgroundColor = 'red';
//     }
//     else{
//         color.style.backgroundColor = 'blue';
//     }
// }

// let x = document.getElementsByTagName('div')[0];
// x.addEventListener("mouseover", RespondMouseOver);

// function RespondMouseOver(){
//    if (x.style.backgroundColor === 'red'){
//        x.style.backgroundColor = 'orange';
//    }

//    else if (x.style.backgroundColor === 'orange'){
//        x.style.backgroundColor = 'yellow';
//    }

//    else if (x.style.backgroundColor === 'yellow'){
//         x.style.backgroundColor = 'green';
//     }

//     else if (x.style.backgroundColor === 'green'){
//         x.style.backgroundColor = 'blue';
//     }

//     else if (x.style.backgroundColor === 'blue'){
//         x.style.backgroundColor = 'purple';
//     }

//    else {
//        x.style.backgroundColor = 'red';
//    }
// }

// Exercise 1

// for (i = 0; i < 4; i++){
//     let para = document.body.getElementsByTagName('p')[i];
//     para.classList.add('para_article');
// }

// document.body.getElementsByTagName('p')[3].remove();

// let x = document.getElementsByTagName('h1')[0];
// x.addEventListener("click", RespondClick);
// function RespondClick() { 
//     x.remove();
// } 
// random = Math.floor(Math.random() * 101)
// x.style.fontSize = `${random}px`;

// let y = document.getElementsByTagName('p')[0];
// y.addEventListener("click", Respond);
// function Respond(){
//     y.style.display = 'none';
// }

// let forms = document.forms[0];
// let f_elelment = forms.elements.firstName;
// console.log(f_elelment.value);

// let newInput =  document.getElementById('input')
//   newInput.oninput = function() {
//     result.innerHTML = input.value;
//   };

// let f_name = document.forms[0].elements.fname.value;
// let l_name = document.forms[0].elements.lname.value;
// console.log(f_name);

// let libButton = document.getElementById('lib-button');
//         let libIt = function() {
//             let storyDiv = document.getElementById("story");
//             let noun = document.getElementById('noun').value;
//             let adj = document.getElementById('adjective').value;
//             let name = document.getElementById('person').value;
//             storyDiv.innerHTML = `${name}'s ${adj} ${noun} made him happy.`;
//         };
//         libButton.addEventListener('click', libIt);

let form = document.getElementById('MyForm');
let button = document.getElementById('submit');

function calculate(){
    let radius = parseInt(form.elements.radius.value);
    let answer = (Math.pow(radius,3) * (4/3));
    let volume = form.elements.volume;
    volume.setAttribute("value", `${answer}π`)
}