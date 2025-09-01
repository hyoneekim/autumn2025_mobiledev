const person = { name: 'Alice', info: {age: 30, occupation: 'Engineer'}};

const {name, info: { age, occupation}} = person;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Occupation: ${ occupation}`);


function greetUser (){
    console.log(`Hello ${name}, You're ${age} years old and you're ${occupation}.`);
    
}

greetUser();

function greetUser2 ({name, age}){
    console.log(`Hello ${name}, You're ${age} years old.`);
    
}

greetUser2({name: 'Bob', age: 25});