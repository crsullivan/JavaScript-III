/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. "this" alone has global scope, and thus affects the whole page (Window Binding).
* 2. In a method however, it refers to its parent object (Implicit Binding). 
* 3. "this" can be used with constructor functions, and then called with the "new" keyword (New Binding).
* 4. "call" and "apply" methods allow "this" to refer back to any object (Explicit Binding).
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayHello(world) {
    console.log(this);
    return (world);
}
sayHello("Hello world!");

// Principle 2

// code example for Implicit Binding

const myself = {
    name: 'Connor',
    greeting: function(hi) {
        console.log(`${hi} my name is ${this.name}, What is yours?`);
    }
    };
myself.greeting('Hey,');

// Principle 3

// code example for New Binding

function MeepMeep(roadrunner) {
    this.noise = " goes meep meep!!!";
    this.roadrunner = roadrunner;
    this.makesNoisesIGuess = function() {
        console.log(this.roadrunner + this.noise);
    };
}

const runnerOne = new MeepMeep('Roadrunner one');
const runnerTwo = new MeepMeep('Roadrunner two');

runnerOne.makesNoisesIGuess();
runnerTwo.makesNoisesIGuess();

// Principle 4

// code example for Explicit Binding

function Animal(characteristics) {
    this.newCreature = characteristics.creature,
    this.newType = characteristics.type,
    this.newReferenceSize = characteristics.referenceSize
    this.newFood = characteristics.food,
    this.newDanger = characteristics.danger
}

Animal.prototype.info = function() {
    return `Legend once told of a creature known as the ${this.newCreature}. The mighty and fierce ${this.newCreature} is a ${this.newType} about the size of ${this.newReferenceSize}. This creature is said to feast upon ${this.newFood}. Be aware, this creature is ${this.newDanger}.`;
}

const animalOne = new Animal ({
    creature: 'Llama',
    type: 'mammal',
    referenceSize: 'a tiny giraffe',
    food: 'probably like, hay or something... Alfalfa? Whatever',
    danger: 'probably safe I guess',
});

const animalTwo = new Animal ({
    creature: 'Owl',
    type: 'bird thing',
    referenceSize: 'a tennis racquet, sorta',
    food: 'mice and stuff',
    danger: 'definitely pretty chill probably unless you poke it or something',
});

const animalThree = new Animal ({
    creature: 'Trout',
    type: 'fish',
    referenceSize: '... I guess just imagine a sardine but bigger',
    food: 'ummm, other fish? and bugs and stuff too',
    danger: 'definitely not a threat, unless its like really big and your super small i guess',
});

const animalFour = new Animal ({
    creature: 'Tiger',
    type: 'mammal',
    referenceSize: 'a small car. Well, a really small car, like an elongated smart car but thinner. Okay maybe not, its like the size of a deer probably. listen, its just a really big cat',
    food: 'anything that bleeds',
    danger: 'for sure something that will kill you but also be a really cool story for your friends and family #worthit',
});

const animalFive = new Animal ({
    creature: 'Dragon',
    type: 'super reptile bird deity probably',
    referenceSize: 'a... I mean it depends.. who knows',
    food: 'literally the set of things that exist',
    danger: 'a destroyer of worlds',
});

console.log(animalOne.info());
console.log(animalTwo.info());
console.log(animalThree.info());
console.log(animalFour.info());
console.log(animalFive.info());