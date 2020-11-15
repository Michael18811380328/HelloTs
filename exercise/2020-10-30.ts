// Pro 教程
// 01 简介
function sayHi(person: string):string {
  return 'Hello, ' + person;
}

// 02 基础
let isDone: boolean = false;
let num: number = 0b1010;
let sentence: string = `Hello, ${num}`;

function alert():void {
  alert('my name is error');
}

// 03 类型推论
// 如果新建变量时没有指定类型，那么TS会推测出一个类型
// 如果定义时没有赋值，那么就是 any 类型。

// 04 联合属性
function unionTypes() {
  let myNumber:string|number;
  myNumber = 'seven';
  myNumber = 7;
}