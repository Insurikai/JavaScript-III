/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is the default state of the 'this' keyword, which uses the window object to try to satisfy the statment.
* 2. Implicit Binding is a binding where the 'this' keyword is implied via dot notation E.G. : adam.sayHi -> adam = this
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function howOld(){
    return this.age;
}
console.log(howOld());//undefined
// Principle 2

const person = {
    name: "Bobby",
    greeting: function(){ return `Yo its ${this.name}.`}
}
console.log(person.greeting());
// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding