// reactjs, angular
console.log("heelo");
var username = "alice";
// username = 123; // error
//  variable:type = value
var account = "alice@gmail.com";
var age = 18;
age = 20;
age = 50;
// age = "50" error
var isLogin = true;
isLogin = false;
var todo1 = {
    id: 1,
    name: "làm capstone movie",
    isCompleted: true,
    desc: "sắp hết deadline",
};
var todo2 = {
    id: 2,
    name: "làm dự án ",
    isCompleted: true,
};
var user1 = {
    id: 112,
    name: "tommy",
    age: 20,
};
// array
var numberArr = [4, 8, 9]; // array chỉ được lưu phần tử có kiểu dữ liệu là number
// let colors: string[];
var colors = ["red", "blue"];
var scoreArr = [1, 3, 5];
scoreArr.push(10);
var userAge = 20;
userAge = "20";
// function type
// quy định data type của return và params
function sum(x, y) {
    return x + y;
}
// void ~ không có giá trị trả về
function sayHello(name) {
    //   return "alice";
    console.log(" hello ".concat(name));
}
sayHello("toomy");
