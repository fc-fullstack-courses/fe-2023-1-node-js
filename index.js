'use strict';
// імпорт модулів CommonJS
// const { MyMath, test } = require('./MyMath'); // іменний імпорт
// const MyMath = require('./MyMath'); // імпорт за замовчанням

// ESModules
// імпорт за замовчанням
// import MyMath from './MyMath.js';
// import MathClass from './MyMath.js'; // можна одразу писати іншу назву

// іменовані імпорти
// import { test, myFunc, data } from './MyMath.js';
// import { test, myFunc, data as newData, arr } from './MyMath.js'; // з перейменнуванням

// комбінований імпорт
// import MathClass, { test, myFunc, data as newData, arr } from './MyMath.js';
import MyMath, * as Test from './MyMath.js'; // * складає всі дані в один об'єкт з вказаною назвою
// const [first] = arr;
const data = 'not null';

console.log(Test);
// console.log(MathClass);
// console.log(test);
// console.log(myFunc);
// console.log(data);
// console.log(newData);

// console.log(MathClass);

/*
  процес імпорту у node JS (require)

  1. resolve - пошук файлу
    1.1 під'єднуються core модулі ноди
    1.2 відбувається пошук файлу з require
      1.2.1 шукається файл з вказанною назвою і розширенням .js
      1.2.2 шукається файл з вказанною назвою і розширенням .json якщо 1.2.1 нічого не знайшов
    1.3 шукається папка з require
      1.3.1 у цій папці шукається файл package.json, в ньому дивляться на властивість "main"
      1.3.2 у цій папці шукається файл index.js або index.json
    1.4 шукають папку node_modules
    1.5 кидають помилку
  2. loading - читає файл
  3. wrapping - імпортований файл обгортають у функцію, їй додають ін'єктовані змінні (require, module, ...) з слайду Вбудовані Об'єкти
  4. evaluation - запускається весь код у файлі
  5. caching - результат роботи 4 етапу зберігається, також віддають дані з exports. Код кожного файлу виконується тільки 1 раз
*/
