// // Non-primitive data types are stored in the heap memory// and are accessed by reference, not by value.
// // This means that when you assign an object to another variable,
// // both variables point to the same object in memory.// Therefore, changes made through one variable will reflect in the other.// Example of non-primitive data type (object) in JavaScript
// let obj1 = {
//     id:20,
//     name:"vaishnavi"
// }

// let obj2 = obj1;
// obj2.id = 30;

// console.log(obj1);
// console.log(obj2);
// // primitive data types are stored in the stack memory// and are accessed by value. This means that when you assign a primitive value to another variable,
// // a copy of the value is made, and changes to one variable do not affect the other.
// // Example of primitive data type (number) in JavaScript
// let a = 10;
// let b=a;
// b=30;
// console.log(b);
// console.log(a);

// const num = 10;
// num=20; // This will throw an error because 'num' is a constant and cannot be reassigned.
// console.log(num);


// const obj = {
//     id:10,
//     balance:200
// }
// obj.id = 20; // This is allowed because we are modifying a property of the object, not reassigning the object itself.
// console.log(obj); // Output: 20

// let obj2 = {
//     id:10,
//     balance:300
// }
// obj = obj2; // this will throw an error because 'obj' is a constant and cannot be reassigned.
// console.log(obj); // Output: { id: 10, balance: 300 }