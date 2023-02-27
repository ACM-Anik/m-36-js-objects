// console.log(this)

const kodom = {
    name: 'Kodom Phool',
    money: 5000,
    study : 'Math',
    subjects: ['calculate', 'algebra', 'geometry'],
    exam: function(){
        console.log(this);
        return(this.name + ' is participating in the exam');
    },
    examArrow: () =>  {
        console.log(this);
    },
    examNested: ()=>{
        const arrow = () => {
            console.log(this);
        }
        arrow();
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

kodom.exam();
kodom.examNested();



const badam = {
    name: 'Kacha Badam',
    money: 8000,
}
badam.exam = kodom.exam;
badam.exam();


function clickHandler(){
    console.log('Inside click Handler',this);
}
document.getElementById('btn-click2').addEventListener('click', function(){
    console.log('Click 2', this);
})
