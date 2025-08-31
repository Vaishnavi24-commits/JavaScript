
// how to create object
//Method 1: object literal
// const obj = {
//     name: "vaishnavi",
//     age: 18,
//     gender:"female"
// }
// console.log(obj);
// console.log(typeof obj);
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj["name"]); // this should be passed as a string
// console.log(obj["age"]);

const { createPublicKey } = require("crypto");
const { add } = require("lodash")



// we can use number as a key also
// const obj = {
//     0: "vaishnavi",
//     1: 16
// }
// console.log(obj['0']);
// console.log(obj['1']);
// console.log(obj[0]); // this will be converted to string internally this can be done only in case of number
// console.log(obj[1]); // this will be converted to string internally this can be done only in case of number

// const obj = {
//     undefined: "vaishnavi",
//     null: "hello"
// }
// console.log(obj.undefined); // this will be converted to string internally this can be done only in case of number
// console.log(obj["undefined"]);
// console.log(obj[undefined]); // this will be converted to string internally this can be done only in case of number 

// console.log(obj.null); // this will be converted to string internally this can be done only in case of number
// console.log(obj["null"]);
// console.log(obj[null]); // this will be converted to string internally this can be done only in case of number




//Method 2: object constructor
// const person = new Object(); // object constructor
// //adding key value pairs to object
// person.name = "vaishnavi"
// person.age = 18
// person.gender = "Female"
// console.log(person);
// //deleting key value pair from object
// delete person.age
// console.log(person);
// console.log(typeof person);
// //updating key value pair
// person.name = "nanu"
// console.log(person);

//Method 3: by class
// class Person{
//     constructor(name,age,gender){
//         this.name = name    
//         this.age = age
//         this.gender = gender
//     }
// }
//     let person1 = new Person("vaishnavi",18,"Female")
//     console.log(person1);
//     let person2 = new Person("nanu",9,"Female")
//     console.log(person2);
    
// const obj = {
//     name: "vaishnavi",
//     age:15,
//     gender:"Female"

// }
// console.log(obj);
// const arr = Object.keys(obj) // it will return array of keys
// console.log(arr);
// const arr1 = Object.values(obj) // it will return array of values
// console.log(arr1);
// const arr2 = Object.entries(obj) // it will return array of array of key value pairs
// console.log(arr2);

//  obj1 = {a:1,b:2}
//  obj2 = {c:3,d:4}
// // //obj3 = Object.assign(obj1,obj2) // it will merge obj2 to obj1 and return obj1 means obj1 will be updated and we dont want to change obj1 so we can use empty object
// // obj3 = Object.assign({},obj1,obj2) // it will merge obj1 and obj2 to empty object and return empty object
// // console.log(obj3,obj1);

// obj4={...obj1,...obj2} // it will merge obj1 and obj2 to empty object and return empty object
// console.log(obj4);



//Shallow copy and Deep copy
//example of shallow copy
// let obj1 = {a:1,b:2}
// let obj2 = obj1 // it will create reference of obj1 in obj2 means both are pointing to same memory location
// obj2.a = 5 // it will update a value in obj2 and also in obj1 because both are pointing to same memory location
// console.log(obj1,obj2);
// //example of deep copy
// let obj3 = structuredClone(obj1)// it will create a new object in different memory location
// obj3.a = 10 // it will update a value in obj3 only because obj3 is pointing to different memory location
// console.log(obj1,obj3);


//Nested object
// const user = {
//     name:"vaishnavi",
//     age:18,
//     address:{
//         street:"abc",
//         city:"pune",
//         country:"India",
//         pincode:455465
//     }
// }
// //console.log(user.address.pincode);
// //console.log(user.address);

// const user2 = Object.assign({},user) // it will create a shallow copy of user object
// console.log(user2);
// user2.address.pincode = 111111 // it will update pincode in user2 and also in user because both are pointing to same memory location of address object
// console.log(user);
// console.log(user2);
// user2.name="nanu" // it will update name in user2 only because name is a primitive data type
// console.log(user);
// console.log(user2);


//Destructuring of object
//  let obj = {
//     name: "vaishnavi",
//      age: 18,
//      mobile: 1234567890,
//      address: 66

     
//  }
// const {name,age} = obj // it will create two variables name and age and assign the values of obj to them
// console.log(name,age);
// const {name:username,age:userage} = obj // it will create two variables username and userage and assign the values of obj to them
// console.log(username,userage);
// const{name,age,...obj1} = obj // it will create two variables name and age and assign the values of obj to them and rest of the properties will be assigned to obj1 as an object
// console.log(name,age);
// console.log(obj1);

// let obj = {
//     name: "vaishnavi",
//     age: 18,
//     mobile: 1234567890,
//     balance:97897878,
//     arr:[35,45,25,65],
//     address: {
//         street: "abc",
//         city: "pune",
//         country: "India",
//         pincode: 455465
//     }

     
//   }
// //   const {address:{pincode,city}} = obj;
// //   console.log(pincode,city);
// // const {arr:[a]} = obj
// // console.log(a);

//function inside object
// let user = {
//   name:"rohit",
//   age:20,
//   greet:function(){
//     return "hello"
//   },
//   meet:function(){
//     return 20
//   }

// }
// console.log(user.greet());
// console.log(user.meet());

//prototype chain