'use strict';
// імпорт модулів
const { Component } = require('./Component');
require('./src');
require('./src/test');
const exportsObj = require('./MyMath.js');
const { MyMath, test } = exportsObj;

const data = 12345;

console.log(MyMath.sum(2, 2, 3, -1));

console.log(MyMath.divide(100, 2, 5));
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
