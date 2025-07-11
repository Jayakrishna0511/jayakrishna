class Calculator {
  constructor(a, b, operation) {
    this.a = a;
    this.b = b;
    this.operation = operation;
  }

  calculate() {
    if (this.operation === 'add') {
      return this.a + this.b;
    } else if (this.operation === 'subtract') {
      return this.a - this.b;
    } else if (this.operation === 'multiply') {
      return this.a * this.b;
    } else if (this.operation === 'divide') {
      if (this.b === 0) {
        return 'Error: Cannot divide by zero';
      }
  return this.a / this.b;
    } else {
      return 'Error: Unknown operation';
    }
  }
}

const calc1 = new Calculator(8, 4, 'add');
console.log('Result:', calc1.calculate()); 

const calc2 = new Calculator(8, 0, 'divide');
console.log('Result:', calc2.calculate()); 