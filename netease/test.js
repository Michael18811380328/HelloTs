"use strict";
// 练习：将 JS 代码改写成 TS 代码
var sumValue = {
    money: 200,
    count: function (value) {
        this.money += value;
    }
};
var handleCount = {
    name: 'Henry',
    friends: ['Bucky', 'Tom'],
    sumValue: sumValue,
};
handleCount.sumValue.count(500);
console.log(handleCount);
