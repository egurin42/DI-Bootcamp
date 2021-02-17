let shopping = {
    veggies: ["cucumber", "carrots", "cauliflower"],
    fruits: ["apples", "bananas", "oranges"]
}

shopping.fruits.push("strawberries");

delete shopping.veggies;

shopping["dairy"] = [];


console.log(shopping);