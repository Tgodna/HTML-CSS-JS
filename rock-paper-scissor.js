let player = 0;
let computer = (Math.floor(Math.random() * 3)); 
if ((player === 0) && (computer === 0)) { 
    console.log("It's a tie!");
    } 
    else if ((player === 0) && (computer === 1)) {
    console.log("Computer wins!");
    } 
    else if ((player === 0) && (computer === 2)) {
    console.log("Player wins!");
    } 
    else if ((player === 1) && (computer === 0)) {
    console.log("Player wins!");
    } 
    else if ((player === 1) && (computer === 1)) {
    console.log("It's a tie!");
    } 
    else if ((player === 1) && (computer === 2)){
    console.log("Computer wins!");
    } 
    else if ((player === 2) && (computer === 0)) {
    console.log("Computer wins!");
    } 
    else if ((player === 2) && (computer === 1)) {
    console.log("Player wins!");
    } 
    else if ((player === 2) && (computer === 2)) {
    console.log("It's a tie!");
    } 
    else {
    console.log("Invalid input!");
    }


console.log("Player picked: " + player);
console.log("Computer picked: " + computer);
