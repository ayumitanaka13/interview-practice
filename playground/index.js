// var, let, const

// var
var pokemon = "ライチュウ";
function sing() {
  // JavaScriptは関数内のどこでもvarの宣言を書ける
  // これらの変数は関数のどこで定義しても、先頭で定義したものとして見なされる
  console.log(pokemon); // undefined
  var pokemon = "ピカチュウ";
  console.log(pokemon); // ピカチュウ
}
sing();

// var
if (true) {
  // if内はスコープが無いのでグローバルスコープ扱い
  var test = "hoge";
}
// ブロックスコープではないので、アクセスできる
console.log(test); // hoge

// let
if (true) {
  // ブロックスコープになる
  let test2 = "hoge2";
}
// アクセスできない
// console.log(test2); // error

// const
const test3 = "hoge";
// test3 = "fuga"; // error
console.log(test3);

// switch

const expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
// "Mangoes and papayas are $2.79 a pound."

// for each
const arr = ["a", "b", "c"];
arr.forEach((el) => console.log(el));

// for of
for (el of arr) {
  console.log(el);
}

// for in
const object = { a: 1, b: 2, c: 3 };
for (property in object) {
  console.log(`${property}: ${object[property]}`);
}

// symbol
console.log(Symbol("foo") === Symbol("foo")); // false

// Inheritance with the prototype chain
let F = function () {
  this.a = 1;
  this.b = 2;
};
let o = new F(); // {a: 1, b: 2}

F.prototype.b = 3;
F.prototype.c = 4;

console.log(o.a); // 1
// Is there a 'b' own property on o? Yes, and its value is 2.
// The prototype also has a 'b' property, but it's not visited.
// This is called Property Shadowing
console.log(o.b); // 2
console.log(o.c); // 4
console.log(o.d); // undefined

// closure

const count = () => {
  for (let i = 1; i < 10; i += 1) {
    setTimeout(() => {
      console.log(i);
    }, i * 100);
  }
};

count();

// promise

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

myPromise.then((successMessage) => {
  console.log(successMessage);
});

// callback

const greeting = (name) => {
  alert("Hello, " + name);
};

const processUserInput = (callback) => {
  let name = prompt("Enter your name: ");
  callback(name);
};

// processUserInput(greeting);

// this

const obj = {
  prop: 42,
  func: function() {
    return this.prop;
  },
//   func: () => {
//     return this.prop;
//   },
};

console.log("this.prop: ", obj.func());
