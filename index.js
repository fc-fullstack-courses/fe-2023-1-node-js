'use strict';
// імпорт модулів
const os = require('os'); // під'єднання вбудованного модуля
const _ = require('lodash');
// const fs = require('fs');
// fs.promises;

// const fs = require('fs').promises;

const fs = require('fs/promises');

fs.readFile('./text.txt', 'utf-8').then((textData) => {
  console.log(textData);
});

const number = _.random(20, 5000);

console.log(number);
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
