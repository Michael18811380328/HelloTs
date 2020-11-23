var items: Array<string> = ['Mike'];
var arrs: string[] = ['Tom'];
var list: [string, number, bool] = ['Mike', 20, true];

enum Color {
  Black,
  Yellow,
  Orange
}

let myColor: Color = Color.Yellow;
console.log(myColor); // 1(index)

enum Animal {
  Rabbit = 1,
  Panda = 20,
  Bear,
  Giraffe = 200
}

function myFn(a: number|string, b: number|string):number {
  return Number(a) + Number(b);
}

let dataObj: {name: string, age: number} = {
  name: "Mike",
  age: 30,
};

let dataObj2: {name: number[], sayHi: (a: number, b: string) => string[]} = {
  name: [1, 2, 3, 4, 5],
  sayHi: function(a: number, b: string):string[] {
    return ['a', 'b', 'c'];
  }
}

let dataObj3: {data: number[], myFunc: (item: number) => number[]} = {
  data: [1,2,3,4],
  myFunc: function(item: number):number[] {
    this.data.push(item);
    return this.data;
  }
}

// null never
var myError = function(msg: string):never {
  throw new Error(msg);
}

let y: number = 10;
y = (() => {
  throw new Error('test');
})();