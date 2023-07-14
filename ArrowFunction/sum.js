var numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = (arr) => arr.reduce((accumulator, currentValue) => {
                    return accumulator + currentValue
}, 0);

let add = sum(numbers);
console.log(add);