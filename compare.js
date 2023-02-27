// const first = {a: 5};
// const second = {a: 5};
// if(first === second){
//     console.log('same'); 
// }
// else{
//     console.log('not same');
// }
// output: not same.

// const third = second;
// if compare third === second in if-else condition then it's output will come 'same'....




////Alert: Do not use this method to compare object or array!
// const first = {a: 5, b: 6};
// const second = {a: 5, b: 6}; 
// const firstString = JSON.stringify(first);
// const secondString = JSON.stringify(second);
// console.log(firstString, secondString);

// if(firstString === secondString){
//     console.log('same');
// }
// else{
//     console.log('not same');
// }
// output: same. 

//// But properties position jodi aage pore hoy, tobe result hobe 'not same'.
const first = {a: 5, b: 6, c:7};
const second = {a: 5, c:9, b: 6}; 
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
console.log(firstString, secondString); 
if(firstString === secondString){
    console.log('same');
}
else{
    console.log('not same');
}
// Output: not same.



function compareObject(first, second){
    const firstKeys =Object.keys(first);
    const secondKeys =Object.keys(second);
    if(firstKeys.length === secondKeys.length){
        for(const key of firstKeys){
            if(first[key] !== second[key]){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}
const isSame = compareObject(first, second);
console.log(isSame);
