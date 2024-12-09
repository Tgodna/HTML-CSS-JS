const luckyNumber = 19;  // Set lucky number to 19
let guess = Math.floor(Math.random() * 30) + 1;  // Generate a random guess between 1 and 30

while (luckyNumber !== guess) {
  console.log("Nope, it isn't " + guess);  // Inform the user that the guess is not correct
  guess = Math.floor(Math.random() * 30) + 1;  // Generate a new random guess
}

console.log("My lucky number is " + guess);  // Once it matches, display the lucky number
