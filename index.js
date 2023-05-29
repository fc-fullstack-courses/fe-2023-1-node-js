'use strict';
// імпорт модулів
const exportsObj = require('./MyMath.js');
const { MyMath, test } = exportsObj;

const data = 12345;

console.log(MyMath.sum(2, 2, 3, -1));

console.log(MyMath.divide(100, 2, 5));
