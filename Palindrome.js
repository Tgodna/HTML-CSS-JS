function isPalindrome(str) {
    str = str.toLowerCase();  // Convert the string to lowercase
    for (let i = 0; i < str.length / 2; i++) {  // Only need to check half of the string
        if (str[i] !== str[str.length - 1 - i]) {
            return false;  // Return false immediately if mismatch
        }
    }
    return true;  // Return true if all characters match
}

console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("moonlight"));  // false
console.log(isPalindrome("aviary"));   // false
console.log(isPalindrome("civic"));   // true
