let allBooks = [
    {title: "Everybody Poops", author: "Taro Gomi", imageURL: "poop.jpg", alreadyRead: true},
    {title: "If You Give a Moose a Muffin", author: "Laura Numeroff", imageURL: "moose.jpg", alreadyRead: false}
];

console.log(allBooks);

let firstBook = allBooks[0].title + " written by " + allBooks[0].author;
let secondBook = allBooks[1].title + " written by " + allBooks[1].author;

console.log(firstBook);
console.log(secondBook);

// let table1 = document.createElement("table")
// table1.style.border = "1px solid black"
// let tablething = document.body.appendChild(table1);


//   function generateTable(table, data) {
//     for (let element of data) {
//       let row = table.insertRow();
//       for (key in element) {
//         let cell = row.insertCell();
//         let text = document.createTextNode(element[key]);
//         cell.appendChild(text);
//       }
//     }
//   }
  
//   let table = document.querySelector("table");
//   generateTable(table, allBooks);