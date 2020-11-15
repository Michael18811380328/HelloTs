// runoob exercise
// 00 
// 01 install
var message:string = 'hello';
console.log(message);

// 02 basic
class Site {
  name():void {
    console.log('Michael');
  }
}
var obj = new Site();
obj.name();

// 03 var type
let arr:number[] = [1, 2];
let arr2:Array<number> = [3, 4];

let x:[string, number];
x = ['text', 20];
// x = [20, 10]; bug

enum Color {
  Red,
  Green,
  Blue,
};
let c:Color = Color.Blue;
console.log(c);

function fn():void {
  console.log("Mike");
}

function test():void {
  var err:never;
  err = (() => {
    throw new Error('exp');
  })();
}

function loop():never {
  while(true) {
    console.log(123)
  }
}

// 4 变量
var name1:string = "Mike";
var age1:number = 10;
var age2:number = 20;
var sum = age1 + age2;

var global = 1;
class Numbers {
  num_val = 2;
  static num_val2 = 2;
  foo():void {
    var fn_num = 4;
    console.log(global);
    console.log(Numbers.num_val2);
    console.log(this.num_val);
    console.log(fn_num);
    // 全局变量、（Class）静态属性、实例属性、函数内部变量
  }
}

// 5 运算符

// 6 条件语句

// 7 循环

// 8 函数
function getComment(ID: string, page?:number):string {
  if (page > 0) {
    return 'have page' + ID;
  } else {
    return 'no page';
  }
}

function addNumber(...nums: number[]) {
  var sum:number = 0;
  for (var i:number = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log(sum);
  return 'hi';
}

var foo = (x:number) => 10 + x;
foo(100);

// 9 常见数据的API
function numberAPI(a:number):void {
  var num:number = a;
  num.toExponential();
  num.toPrecision(2);
  num.toFixed();
  num.toLocaleString();
  var value:number = 8;
  num.toString(value);
}

function stringAPI():void {
  var text:string = 'test';
  var text2:string = 'Mike';
  text.charAt(2);
  text.charCodeAt(2);
  text.concat(text2);
  text.indexOf('a');
  text.lastIndexOf('a');
  text.localeCompare(text2);
  text.match(/^[a-z]$/g);
  text.replace(/^happy$/g, 'cat');
  text.search(/^happy|[a-z]$/g);
  text.slice(1, 2);
  text.split('');
  text.substring(1, 2);
  text.toUpperCase();
  text.toLowerCase();
}

// 10 array object
function arrayObject() {
  var tables:string[] = ['mile'];
  var numbers:number[] = [1,2,3];
  var names:string[] = new Array('Mike');

  var [a, b] = numbers;
  console.log(a, b);

  var k:any;
  for (k in numbers) {
    console.log(k);
  }

  var matrix:number[][] = [[1,2,3],[4,5,6]];
  console.log(matrix[0][1]);

  // API
  tables.concat(names);
  tables.join('-');
  tables.every(item => !item);
  tables.some(item => !item);
  tables.some(item => !item);
  tables.indexOf('Mike');
  tables.lastIndexOf('Tom');
  tables.forEach(item => console.log(item));
  tables.map(item => item + 'test');
  tables.pop();
  tables.push('te');
  tables.shift();
  tables.unshift('mike');
  tables.slice(1,2);
  tables.splice(2, 1, 'test1');
  tables.toString();
  tables.toLocaleString();
  tables.reverse();
  numbers.sort((a, b) => {return b - a});
  numbers.reduce((a, b) => a + b, 0);
  numbers.reduceRight((a, b) => a + b, 100);
}

// 11 map
function mapAPI() {
  let map = new Map();
  let map2 = new Map([['name', 'Moe']]);
  map.clear();
  map.set('age', 20);
  map.get('age');
  map.has('age');
  map.delete('age');
  map2.keys;
  map2.values;
}

// 12 元组
function tupleAPI() {
  var myTuple = [1, '2', true];
}

// 联合类型
function unit() {
  var arr:number[]|string[] = [1,2,3,45];
  arr = ['Mike']
}

// 13 接口
function interfaceAPI() {
  interface Person {
    firstName:string,
    age:number,
    sayHi: () => string,
  }
  var p1:Person = {
    firstName: "Mike",
    age: 20,
    sayHi: ():string => 'Hello'
  };
  console.log(p1);
  interface Animal {
    name:string,
    commandLine:string[]|number[]|(() => string),
  }
}

function interfaceInherit() {
  interface Person {
    age:number
  }
  interface Chinese extends Person {
    hobby:string
  }
  interface Child {
    address:string
  }
  interface Boy extends Person, Child {
    sayHi: () => string;
  }
}

// 14 class
class House {
  address:string,
  constructor(address:string) {
    this.address = address;
  }
  get():string {
    return this.address;
  }
}

let myHouse = new House('24 road');
console.log(myHouse.address);
console.log(myHouse.get());

// TS 不支持一个类继承多个类，支持链式继承
// 子类的属性和方法可以覆盖父类的属性和方法
// 类可以继承接口

function classInherit() {
  interface Person {
    age:number
  }
  class Teacher implements Person {
    age:number
    address:string
    constructor(age:number, address:string) {
      this.age = age;
      this.address = address;
    }
  }
  var MrsLi = new Teacher(20, '27 avenue');
  console.log(MrsLi);
}

// TS 中的属性和方法需要在声明时确定，不能在执行是新增方法（可以更改方法）
function objectAPI() {
  var sites = {
    name: 'Mike',
    age: 20,
    sayHi: function() {},
  };
  sites.sayHi = function():string {
    let name = "mike";
    console.log(name);
    return name;
  }
}

// 15 命名空间
// 为了避免不同模块命名冲突，使用命名空间解决。
namespace SomeNameSpaceName {
  export interface Person {}
  export class TableView {}
  export class Tabs {}
}

SomeNameSpaceName.TableView
SomeNameSpaceName.Tabs

// 命名空间嵌套
namespace Name1 {
  export namespace Name2 {
    export class Test {

    }
  }
}

/// <reference path='IShape.ts' />

// 16 模块：使用 import export 进行模块导入导出
// import someRef = require('./someRef.ts');

// 17 声明文件
// 声明文件使用 .d.ts 后缀 使用 declare 关键字
// 声明部分在编译前检查，编译后就删除了
declare module Runoob {
  export class Calc {
    doSum(limit:number) : number;
  }
}
