function generateOddPattern(a) {
  const limit = a % 2 === 0 ? a - 1 : a;
  const result = [];

  for (let i = 1; i <= limit; i++) {
    result.push(2 * i - 1);
  }

  return result.join(', ');
}

console.log(generateOddPattern(1)); 
console.log(generateOddPattern(2)); 
console.log(generateOddPattern(3)); 
console.log(generateOddPattern(4)); 
console.log(generateOddPattern(5)); 
console.log(generateOddPattern(6)); 
console.log(generateOddPattern(7));