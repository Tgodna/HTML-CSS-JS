const pig = {
    name: "Charlotte",
    type: "pig",
    age: 2,
    makeSound: function() {
        return "Oink Oink";
    }
}

const sheep = {
    name: "Dolly",
    type: "sheep",
    age: 5,
    makeSound: function() {
        return "Baa Baa";
    }
}

const dog = {
    name: "Riley",
    type: "dog",
    age: 3,
    makeSound: function() {
        return "Woof Woof";
    }
}

console.log(pig.name + " is a " + pig.age + " year old " + pig.type + " that says " + pig.makeSound() + "!");
console.log(sheep.name + " is a " + sheep.age + " year old " + sheep.type + " that says " + sheep.makeSound() + "!");
console.log(dog.name + " is a " + dog.age + " year old " + dog.type + " that says " + dog.makeSound() + "!");