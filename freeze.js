const bottle ={color: 'yellow', price: 50, isCleared: true, capacity: 1};
const keys = Object.keys(bottle);
console.log(keys);
const values = Object.values(bottle);
console.log(values);

// To show both:
const pair = Object.entries(bottle);
console.log(pair); 

const twoDimension = [
    ['color', 'yellow'],
    ['price', 50],
    ['isCleaned', true],
    ['capacity', 1]
];
// To delete property:
delete bottle .isCleared;
console.log(bottle);
// To prevent delete use seal:
Object.seal(bottle);
delete bottle.price;
// Seal e Value update kora jay, but add kora jay na
bottle.price = 1000;
bottle.height = 12;
console.log(bottle);
// to prevent any changes of an object is use of freeze():
Object.freeze(bottle);
delete bottle.price;
bottle.price = 2000;
bottle.height = 20;
console.log(bottle);


