const dnaPieces = ["A", "C", "G", "T"];
const myDNA = [];

for (let i = 0; i < 24; i++) {
    let triplet = "";
    for (let j = 0; j < 3; j++) {
        let randomIndex = Math.floor(Math.random() * 4);
        triplet += dnaPieces[randomIndex];  // Add a random nucleotide to the triplet.
    }
    myDNA.push(triplet);  // Push the randomly generated triplet into the array.
}

console.log(myDNA);  // Print the sequence of triplets.
