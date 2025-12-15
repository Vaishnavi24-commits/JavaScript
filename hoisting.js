// console.log(x); // undefined due to hoisting
// console.log(y);
// var x = 4;
// let y = 5; // ReferenceError: Cannot access 'y' before initialization


// greet() // here if its written at the top it would work fine as no let or const is used
// function greet(){
//     console.log("Hello World");
    
// }
//memory execution phase
//greet:function jayega
//code execution phase
// greet() // here it would work fine as it is called after the initialization



// a() // ReferenceError: Cannot access 'a' before initialization this is the error comes as let a is written
// let a = function(){
//     console.log("Hello a");
    
// }
//memory allocation phase
//a:pura function jayega but code execution phase k bad
//code execution phase




// let a = function(){
//     console.log("Hello a");
    
// }
// a() //  here it would work fine as it is called after the initialization 