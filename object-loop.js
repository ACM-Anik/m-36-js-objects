const numbers = [12, 54, 65, 30, 40];
for(const number of numbers){
    console.log(number);
};

// for of cannot be used with objects.
const bottle ={color: 'yellow', price: 50, isCleared: true, capacity: 1};

// First option to loop through an object:-
const keys = Object.keys(bottle);
// console.log(keys);
/* 
3 ways to read object properties:
bottle.color
bottle['color']
bottle[key]
*/
for(const key of keys){
    console.log(key, bottle[key]);
}

// for in loop through an object:
for(const key in bottle){
    console.log(key, bottle[key]);
}


// Advanced:
const pair = Object.entries(bottle);
console.log(pair);
for(const [key, value] of Object.entries(bottle)){
    console.log(key, value);
}