let strings = ["hello", "world", "javascript", "code"];

let titleCaps = (arr) => {
  return arr.map((str) => {
    return str[0].toUpperCase() + str.substring(1);
  });
};

let title = titleCaps(strings);
console.log(title);