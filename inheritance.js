// user1 = {
//     name:"vaishnavi",
//     age:18
// }
// user2 = {
//     amount:88,
//     card:8997878787
// }
// user1.__proto__=user2 // it will set the prototype of user1 to user2 dont use this method its very costly
//user2=Object.create(user1) // it will create a new object with user1 as prototype of user2 use this method because its not costly and its faster
// console.log(user1);
// console.log(user2);
// console.log(user1.name);

// let arr = [1,2,3,4,5]
// console.log(arr.__proto__==Array.prototype); // it will return true because arr is an instance of Array
// console.log(arr.__proto__.__proto__==Object.prototype);// it will return true because Object is the prototype of Array
// console.log(arr.__proto__.__proto__.__proto__==null); // it will return true because Object is the topmost prototype

