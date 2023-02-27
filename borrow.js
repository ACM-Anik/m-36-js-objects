const borrowKodom = {
    name: 'Kodom Phool',
    money: 5000,
    study : 'Math',
    subjects: ['calculate', 'algebra', 'geometry'],
    exam: function(){
        // property theke man nite hole this use korte hoy
        return(this.name + ' is participating in the exam');
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is talking improvement on exam  exam on ${subject}`; 
    },
    treatDay: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
}
const result = borrowKodom.exam();
console.log(result);

const borrowBadam = {
    name: 'Kacha Badam',
    money: 8000,
}

const result2 = borrowKodom.exam.call(borrowBadam);
// console.log(result2);

const badamMoney = borrowKodom.treatDay.call(borrowBadam, 400, 40);
// call --> coma
console.log(badamMoney);

const badamMoney2 = borrowKodom.treatDay.apply(borrowBadam, [1000, 100]);
// apply --> array
console.log(badamMoney2);



const badamTreat = borrowKodom.treatDay.bind(borrowBadam);
const remaining = badamTreat(1000, 100);
console.log(remaining);
