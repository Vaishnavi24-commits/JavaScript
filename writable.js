// let obj={};
// obj.name = "vaishnavi"
// //console.log(obj);
// console.log(Object.getOwnPropertyDescriptor(obj,'name'));
// //{
//   //value: 'vaishnavi',
  //writable: true,
  //enumerable: true,
  //configurable: true
//} // this is the output we got

// writable = true // value ko kya change kar sakte h if true we can change if false we cannot change
//obj.name="Mohit"

// let obj1 = {}
// Object.defineProperty(obj1,'name',{
//     value:"vaishnavi",
//     writable:false,
//     enumerable:true,
//     configurable:true // configurable false:uh cannot change the values of writable and enumerable and if configurable is true we can change the values of writable and enumerable
// })
// console.log(obj1);
// obj1.name="nanu"
// console.log(obj1);

//enumerable
// const customer = {
//   name:"Rohit",
//   age:23,
//   account_no:6774747,
//   balance:600

// }

// Object.defineProperty(customer,"name",{
//   enumerable:false // jaha bhi enumerable true hoga uss key ka access hoga yah print hoga,even inherit hokr bhi koi bhi property or key aati h and uska enumerable true hua toh vo bhi print hoga
// })

// //for in loop vo sari values/keys print kar deta h jiska enumerable true hota h! customer object that we made has inherited properties from object.prototype but vo iss liye print nhi hori coz "toString" etc inn sab ka enumerable false h

// for(let key in customer){
//   console.log(key);
  
// }
// //output
// //age
// //account_no
// //balance
// //exmaple for inherit case of enumerable
// let cust2=Object.create(customer)
// cust2.city="dewas"
// cust2.place="MP"

// for(let key in cust2){
//   console.log(key);
  
// }
// //output
// //age
// //account_no
// //balance
// //city
// //place
// //age
// //account_no
// //balance

// const customer = {
//    name:"Rohit",
//    age:23,
//    account_no:6774747,
//  balance:600
// }
// console.log(Object.getOwnPropertyDescriptor(Object.prototype,'toString'));

// Object.defineProperty(Object.prototype,'toString',{
//   enumerable:true
// })
// for(let key in customer){
//   console.log(key);
  
// }