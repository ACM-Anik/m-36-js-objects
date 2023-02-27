//1. Create object using object literals
const player = {};
player.name = 'small Nirob';
player.speality = 'batman';
player.bat = function(){
    console.log('swing your bat');
}
console.log(player);
player.bat();



const student = {
    name: 'Panday',
    job: 'khai shudu andey',
    ball: function(){
        console.log('throw the ball');
    },
    sallary: 100000
}

//2. Object Constructor
const person = new Object();
// console.log(person); 


// 3. Object create method 
// const item = Object.create(null);
const item1 = Object.create(student);
console.log(item1.name);


// 4. Class
class Person{
    name = 'Chulbul';
    address = 'Shodor Ghat';
    constructor(age){
        this.age = age;
    }
}

const person2 = new Person(56);
console.log(person2);

// 5. function
function Car(model, price){
    this.model = model;
    this.price = price;
}
const tesla = new Car('elon', 32);