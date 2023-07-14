var numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
};

let prime = (arr) => arr.filter((num) => isPrime(num));

let primeNumbers = prime(numbers);
console.log(primeNumbers);
