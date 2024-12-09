const characters = [
    "The Wally Watchers",
    "Wilma",
    "Fritz",
    "Wizard Whitebeard",
    "Odlaw",
    "Waldo",
    "Woof"
  ];
//write a conditional statement if our characters array includes "Waldo" save the index of the "waldo" element in a new variable called waldoIndex then log "Found Waldo at index {indexNumber!" to the console. Else,log "not found" to the console.
   if (characters.includes("Waldo")) {
        waldoIndex = characters.indexOf("Waldo");
        console.log("Found Waldo at index " + characters.indexOf("Waldo") + "!");
    } else {
        console.log("Not Found");
    }