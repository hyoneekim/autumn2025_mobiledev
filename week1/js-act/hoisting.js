//step_1

const cube = (x) => x * x * x;

const fullName = (first, last) => first + " " + last;

const power = (base, exp) => exp ===0? 1: base * power(base, exp -1);

const sumCubes = numbers => numbers.reduce((acc,current) => acc + current, 0);
//console.log(sumCubes([1,2,3,4,5]));

//Step_2
//1. the value of 'var' is not yet assigned; just got hoisted as undefined.
//2. 'let' doesn't get automatically initialized as 'var': throws an Reference error.
//3. const showMessage is not initialized: also Reference error.
//4. the function is hoisted and declared; the definition and the name of function can be called when console.log is evoked. 

//step_3
const print = values => values.forEach(element => {
    console.log(element);
});
print([10,20,30]);

let lastLogin = '1/1/1970';
const welcome = (first, last)=> `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`;
console.log(welcome('Charlie', 'Munger'));
