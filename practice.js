const dinner = {
    cheeseburger: 12,
    steak: 20,
    soup: 8,
    macAndCheese: 14,
    soupAndSalad: 16
};

console.log(Object.keys(dinner));
console.log(Object.values(dinner));

let totalCost = 0;

for (const food in dinner) {
    totalCost += dinner[food];
}

console.log(totalCost);


let total = 0
for (const meals in dinner) {
    total += dinner[meals];
}

console.log(total);