// 练习：将 JS 代码改写成 TS 代码
type sumType = {money: number, count: (value: number) => void};

let sumValue: {money: number, count: (value: number) => void} = {
  money: 200,
  count: function(value: number):void {
    this.money += value;
  }
};

let handleCount: {
  name: string,
  friends: string[],
  sumValue: sumType
} = {
  name: 'Henry',
  friends: ['Bucky', 'Tom'],
  sumValue: sumValue,
};

handleCount.sumValue.count(500);
console.log(handleCount);

// {
//   name: 'Henry',
//   friends: [ 'Bucky', 'Tom' ],
//   sumValue: { money: 700, count: [Function: count] }
// }