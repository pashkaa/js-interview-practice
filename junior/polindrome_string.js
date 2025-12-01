function isPalindrome(string) {
  if (string.length === 1) return true;

  const newString = string.toLowerCase();
  if (newString.length % 2 === 0) {
    for (let i = 0; i < newString.length / 2; i++) {
      if (newString[i] !== newString[newString.length - i - 1]) return false;
    }
    return true;
  } else {
    for (let i = 0; i < newString.length / 2 - 1; i++) {
      if (newString[i] !== newString[newString.length - i - 1]) return false;
    }
    return true;
  }
}

console.log(isPalindrome("level")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("bob")); // true
