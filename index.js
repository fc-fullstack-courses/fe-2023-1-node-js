'use strict';

const a = 5;
const b = 10;

const c = a * b;

class MyMath {
  static sum = (...numbers) => {
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
      result += numbers[i];
    }

    return result;
  };

  static divide = (...numbers) =>
    numbers.reduce((acc, currentNumber) => acc / currentNumber);
}

class Component {
  render() {
    return `rendered some component with data`;
  }
}

console.log(MyMath.sum(2, 2, 3, -1));

console.log(MyMath.divide(100, 2, 5));
