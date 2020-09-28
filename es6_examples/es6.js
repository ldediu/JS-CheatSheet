//-------------------------------------------------------------------------------------------
// 1. Let and var
//-------------------------------------------------------------------------------------------

if (true) {
    let age = 27;
}
console.log(age)   //-error

//-------------------------------------------------------------------------------------------
// 2. Const
//-------------------------------------------------------------------------------------------

const AGES = [27, 30, 33];
AGES.push(25);
console.log(AGES);   //-27,30,33,25  - pointer to the arr is not changed

//-------------------------------------------------------------------------------------------
// 3. Arrow Functions
//-------------------------------------------------------------------------------------------

var fn = a => a + 5;
function fn(a) { return a + 5; }

setTimeout(() => console.log('Hello'), 1000);   //-anon. func returns con.log

//-------------------------------------------------------------------------------------------
// 4. Arrow Functions and this
//-------------------------------------------------------------------------------------------

var button = document.querySelector('button');

var fn2 = () => console.log(this);   //es6 - returns window object, was called in window scope


function fn() {                      //es5 - returns buttonHtml object   
    console.log(this);
}
//The this inside the arrow function isn't redirected away from the window object (global context),
//because,  the arrow function doesn't have the ability to redirected a this.
//The classic function does have the ability to redirected a this.
//The this is important (more apparently useful) when it's applied to a
//JavaScript class (function constructor & its prototype object).
//Usually,  you don't want the this to be directed away from its class.

button.addEventListener('click', fn);

//-------------------------------------------------------------------------------------------
// 5. Rest operator (...)
//-------------------------------------------------------------------------------------------

function sumUp(...toAdd) {

    console.log(toAdd);   // [100, 10, 20]

    let res = 0;
    for (let i = 0; i < toAdd.length, i++) {
        res += toAdd[i];
    }
    return res;
}
console.log(sumUp(100, 10, 20));   // 130

//-------------------------------------------------------------------------------------------
// 6. Spread operator (...)
//-------------------------------------------------------------------------------------------

let numbers = [1,2,3,4,5];

console.log(Math.max(numbers));   // returns NaN, takes list of num only

console.log(Math.max(...numbers));   // returns 5, splitted array to individ. values

//-------------------------------------------------------------------------------------------
// 7. For of loop
//-------------------------------------------------------------------------------------------

let testResults = [1.23, 1.10, 4.1]

for (let testRes of testResults) {
    console.log(testResults);
}

//-------------------------------------------------------------------------------------------
// 8. Template Literals
//-------------------------------------------------------------------------------------------

let name = 'Max';

let description = `
    Hello, I'm ${name}
`;

console.log(description);

//-------------------------------------------------------------------------------------------
// 9. Import and export
//-------------------------------------------------------------------------------------------

export {keyValue1, keyValue2};  //inside external.js
import {keyValue1, keyValue2} from 'external.js'

export {keyValue1, test};
import * as imported from 'external.js'  //-packs everything into an object from ext.js
imported.test();  //runs a func from ext.js

//-------------------------------------------------------------------------------------------
// 10. Classes basics
//-------------------------------------------------------------------------------------------

class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log('Hello, my name is ' + this.name);
    }
}

let person = new Person('Max');
person.greet();

//-------------------------------------------------------------------------------------------
// 11. Inheritance
//-------------------------------------------------------------------------------------------

class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log('Hello, my name is ' + this.name);
    }
}

class Max extends Person {
}

let max = new Max('Max');

max.greet();

//-------------------------------------------------------------------------------------------
// 12. Inheritance and super()
//-------------------------------------------------------------------------------------------

class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age);
    }
}

class Max extends Person {
    constructor(age) {
        super('Max');  //-refers to parent
        this.age = age;
    }
}

let max = new Max(30);
max.greet();

//-------------------------------------------------------------------------------------------
// 13. Static Methods
//-------------------------------------------------------------------------------------------

class Helper {
    logTwice(message) {
        console.log(message);
        console.log(message);
    }
}
Helper.logTwice('Logged!');    // Error, we hava to create an object first from the class to
                               // use its methods

class Helper {
    static logTwice(message) {  
        console.log(message);
        console.log(message);
    }
}
Helper.logTwice('Logged!');    // Logged!  Logged!
                               // Methods are available inside the class without instantiating it

//-------------------------------------------------------------------------------------------
// 13. Classes and Modules
//-------------------------------------------------------------------------------------------

export class Helper {         //now we can import this class into another js file
    logTwice(message) {
        console.log(message);
        console.log(message);
    }
}

//-------------------------------------------------------------------------------------------
// 14. Getters and Setters
//-------------------------------------------------------------------------------------------

class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name.toUpperCase();
    }
    set name (value) {
        if (value.length > 2) {
            this._name = value;
        }
        else 
            console.log("Rejected");
    }
}

let person = new Person ('Max');
console.log(person.name);

//-------------------------------------------------------------------------------------------
// 15. Symbols
//-------------------------------------------------------------------------------------------

let symbol = Symbol('debug');
let anotherSymbol = Symbol('debug');
console.log(typeof symbol);              //symbol
console.log(symbol.toString());          //Symbol(debug)
console.log(symbol == anotherSymbol)     //false

let obj = {
    name: 'max',
    [symbol]: 22   //refers to a var 
}
console.log(obj)          //object Object:{name: "max"}

//-------------------------------------------------------------------------------------------
// 16. Maps
//-------------------------------------------------------------------------------------------

let cardAce = {
    name: 'Ace of Spades'
};

let cardKing = {
    name: 'King of Clubs'
};

let deck = new Map();
deck.set('as', cardAce);
deck.set('kc', cardKing);

console.log(deck.get('as'));

for (key of deck.keys()) {
    console.log(key);
}
for (value of deck.values()) {
    console.log(value);
}
for (entry of deck) {
    console.log(entry);  //shows whole thing
}

deck.clear();