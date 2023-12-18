// reactjs, angular

console.log("heelo");

let username = "alice";

// username = 123; // error

//  variable:type = value
let account: string = "alice@gmail.com";
let age: number = 18;
age = 20;
age = 50;
// age = "50" error
let isLogin: boolean = true;
isLogin = false;

// reference : object, array

// interface ~ miêu tả object

interface Todo {
  id: number;
  name: string;
  isCompleted: boolean;
  desc?: string; // optional key ~ key không bắt buộc
}
let todo1: Todo = {
  id: 1,
  name: "làm capstone movie",
  isCompleted: true,
  desc: "sắp hết deadline",
};
let todo2: Todo = {
  id: 2,
  name: "làm dự án ",
  isCompleted: true,
};

// glinst, itviec, vnwork, group fb: "viec it, front end tuyen dung", leet code

// type ~ mô tả object, tạo type

type User = {
  id: number;
  name: string;
  age: number;
};

let user1: User = {
  id: 112,
  name: "tommy",
  age: 20,
};

// array

let numberArr: number[] = [4, 8, 9]; // array chỉ được lưu phần tử có kiểu dữ liệu là number

// let colors: string[];

let colors: Array<string> = ["red", "blue"];
let scoreArr: Array<number> = [1, 3, 5];
scoreArr.push(10);
// scoreArr.push("tom");

// tạo ra type mới

// union type: tạo ra 1 type vừa chứa được number, vừa chứa được string

type ResponseAge = number | string;

let userAge: ResponseAge = 20;

userAge = "20";

// function type

// quy định data type của return và params
function sum(x: number, y: number): number {
  return x + y;
}

// void ~ không có giá trị trả về
function sayHello(name: string): void {
  //   return "alice";
  console.log(` hello ${name}`);
}

sayHello("toomy");

// enum
enum GenderType {
  male = 0,
  female = 1,
}

interface SV {
  id: number;
  name: string;
  gender: GenderType;
}
let sv1: SV = {
  id: 123,
  name: "bobby",
  gender: GenderType.male,
};

function myConsoleLog(data: number) {
  console.log("😀 - myConsoleLog - data", data);
}

// myConsoleLog("8");
myConsoleLog(8);

// generic

function myConsoleGeneric<T>(data: T) {
  console.log("😀 - data", data);
}
myConsoleGeneric<string>("helllo");
myConsoleGeneric(true);
myConsoleGeneric(222);

function introduceProduct<F, S>(value1: F, value2: S) {
  console.log("😀 - value2", value2);
  console.log("😀 - value1", value1);
}

introduceProduct<string, number>("Tivi sony", 5);
introduceProduct<string, string>("Tivi sony", "rất tốt");
