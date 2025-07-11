function generateOddSeries(a) {
  const result = [];
  
  for (let i = 1; i <= a; i++) {
    result.push(2 * i - 1);
  }

  return result.join(', ');
}

console.log(generateOddSeries(1)); 
console.log(generateOddSeries(2)); 
console.log(generateOddSeries(3)); 
console.log(generateOddSeries(4))