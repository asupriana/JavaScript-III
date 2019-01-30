/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object binding; refers to the main window, or 'global scope'.
* 2. Implicit Binding; When a function is called 'this.example', this would be the 'Object' and 'example' would be the 'function'. 
* 3. New Binding; refers to the creation of a 'new' object within a constructor function.
* 4. Explicit binding; when an apply() or a call() method is used, 'this' is explicitly defined.

* write out a code example of each explanation above
*/

// Principle 1
function greeting(name) {
    console.log(`Hello ${this}`);
    return greeting;
}

greeting('Knell');
// code example for Window Binding

// Principle 2
const helloWorldFunction = message => {
    message.hello = function() {
        console.log(`Hello ${this.name}`);
        console.log(this);
    };
};


helloWorldFunction('Knell');

// code example for Implicit Binding

// Principle 3
function greetPerson(person) {
    this.greeting = 'Hello ';
    this.person = person;
    this.speak = function() {
        console.log(this.greeting + this.person);
        console.log(this);
    }
}

const Knell =  new greetPerson('Knell');
const Noel = new greetPerson('Noel');

Knell.speak();
Noel.speak();


// code example for New Binding

// Principle 4
function Product(name, price) {
    this.name = name;
    this.price = price;

}

function electronics(name, price) {
    Product.call(this, name, price);
    this.category = 'Electronics';
}

function groceries(name, price) {
    Product.call(this, name, price);
    this.category = 'Groceries';
}

const laptops = [
    new electronics('mac', 3199),
    new electronics('windows', 2199),
    new electronics('linux', 1099)
]

const fruits = [
    new groceries('apple', 3),
    new groceries('pineapple', 4),
    new groceries('mango', 2)
]


console.log(laptops);
console.log(fruits);
// code example for Explicit Binding