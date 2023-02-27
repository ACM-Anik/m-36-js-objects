const student = {
    name: 'Kodom',
    money: 5000,
    study : 'Math',
    subjects: ['calculate', 'algebra', 'geometry'],
    exam: function(){
        // propertity theke man nite hole this use korte hoy
        return(this.name + 'is participating in the exam');
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

const output = student.exam();
// console.log(output);

const reExam = student.improveExam('algebra');
// console.log(reExam);

const remaining = student.treatDay(900, 100);
console.log(remaining);

const dolaRemaining = student.treatDay(500, 50);
console.log(dolaRemaining); 