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

// іменний експорт
// module.exports.MyMath = MyMath;
// module.exports.test = 'це воно';
// module.exports.PI = 3.14;

// експорт за замовчанням CommonJS
// module.exports = MyMath;
// module.exports = data; // перезапис !

// ESModules
//  експорт за замовчанням
export default MyMath;
// export default data; // помилка!

// іменовані експорти
export const test = 'це воно';
export function myFunc() {}
export { data, c };
export const arr = [1,2,3];
