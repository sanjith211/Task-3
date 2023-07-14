var string=["car", "ada", "malayalam", "civic", "radar", "abc", "november", "march"];

let isPalindrome = (str) => {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
};

let getPalindromes = (arr) => arr.filter((word) => isPalindrome(word));

const palindromes = getPalindromes(string);
console.log(palindromes);
