// a.filter((val)){
//     return true or falsee chiyee ki nhi chiyeeee filter hooo ki nhiii hooooo
// }


// let a = [1,2,3,4,5,6]
// const result = a.filter((num)=>{
//     return num%2==0

// })
// console.log(result);
// //output
// //[ 2,3,4,6 ]


// const result= a.filter((num)=>num%2==0)
// console.log(result);
//output
//[ 10, 40 ]

// const student = [
//     {name:"Rohan",age:20,marks:70},
//     {name:"Roh",age:9,marks:67},
//     {name:"Roha",age:2,marks:69},
//     {name:"Rohit",age:8,marks:56},
// ]
// const result = student.filter((obj)=>{
//     return obj.marks>59
// })
//output
// [
//   { name: 'Rohan', age: 20, marks: 70 },
//   { name: 'Roh', age: 9, marks: 67 },
//   { name: 'Roha', age: 2, marks: 69 }
// ]
//written in short form
// const result = student.filter(value=>value.marks>59)
// console.log(result);
// [
//   { name: 'Rohan', age: 20, marks: 70 },
//   { name: 'Roh', age: 9, marks: 67 },
//   { name: 'Roha', age: 2, marks: 69 }
// ]
//if we only require marks instead of using entire object we can use destructuring in parameter here we had destructured marks from object
// const result = student.filter(({marks})=>marks>50)
// console.log(result);
//output
// [
//   { name: 'Rohan', age: 20, marks: 70 },
//   { name: 'Roh', age: 9, marks: 67 },
//   { name: 'Roha', age: 2, marks: 69 },
//   { name: 'Rohit', age: 8, marks: 56 }
// ]
