let myNumber = 10;
let binary = "";

if (myNumber === 0) {
    binary = "0";
} else {
    while (myNumber > 0) {
        binary = (myNumber % 2) + binary;
        myNumber = Math.floor(myNumber / 2);
    }
}

console.log(binary);  // Output: 1010
