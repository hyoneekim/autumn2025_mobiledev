const sayHelloArrow = () => "Hello, world?!?!";

//console.log(sayHelloArrow());

const doubleArrow = (x) => x *2;
//console.log(doubleArrow(2));

const addArrow = (x,y) => x + y;
//console.log(addArrow(4,5));

const person = {
    name: "Alice",
    sayHi: (name) => "Hi, " + name + "!"
}

//console.log(person.sayHi("Kyle"));

const numbers = [1,2,3,4,5];

const doubled = [];
numbers.forEach((num)=> doubled.push(num *2));
console.log(doubled);

const numbersReduce = numbers.map(n => n *2);
console.log(numbersReduce);
