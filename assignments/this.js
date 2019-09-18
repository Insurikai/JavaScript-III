/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is the default state of the 'this' keyword, which uses the window object to try to satisfy the statment.
* 2. New Binding is a binding where the scope where 'this' is used is duplicated and 'this' is hardcoded on the new copy
* 3. Implicit Binding is a binding where the 'this' keyword is implied via dot notation E.G. : adam.sayHi -> adam = this
* 4. Explicit Binding is when the binding is actively stated, can be done with call, apply, and bind 
*
* write out a code example of each explanation above
*/

// Principle 1:

function howOld(){
    return this.age;
}
console.log(howOld());//undefined

// Principle 2:

    function animal(animalName){
        this.name = animalName;
    }
    const myPet = new animal('Theona');
    console.log(myPet.name);

// Principle 3:

const person = {
    name: "Bobby",
    greeting: function(){ return `Yo its ${this.name}.`}
}
console.log(person.greeting());

// Principle 4:

function greetPerson(){
    return `Hello ${this.name}, nice to see you.`;
}
const adam = {
    name: "Adam",
    gender: 'M'
}
const eve = {
    name: "Eve",
    gender: 'F'
}
console.log(greetPerson.call(adam));
const setInStone = greetPerson.bind(eve);
console.log(setInStone());