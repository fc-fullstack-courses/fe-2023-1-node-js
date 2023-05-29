const a = 5;
const b = 10;

const c = a * b;

const data = null;

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

// експорт даних
exports.MyMath = MyMath;
exports.test = 'це воно';

console.log('hello from myMath');