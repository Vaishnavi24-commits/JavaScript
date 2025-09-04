//Global scope,local scope(functional scope),block scope
//Global scope
// let a=10
// var b =20
// const c=30

// function greet(){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// greet()


//local scope (functional scope)
// function greet(){
//     let a=10
//     var b =20
//     const c=30
//     console.log("Hello");
//     console.log(a);
//     console.log(b);
//     console.log(c);
    
    
    
    
// }
// greet()
// //console.log(a); // cannot be accessed outside the function


//Block scope
// if(true){
//     let a=10
//     var b =20
//     const c=30
// }
//console.log(a); // cannot be accessed outside the block as let
//console.log(b); //var DATATYPE can be accessed outside the block scope thats very dangerous that can change the actual values and can make repeated entries that is why its not used
//console.log(c); //cannot be accessed outside the block as const 

// let amount = 20 // here amount variable is in global scope 
// if (true){
//     let amount=30 // here the amount variable is in local scope this is valid
//     console.log(amount);//output is 30 here 
    
// }
// console.log(amount); //and here the output is 20 here the let datatype is not changing the values of the global scope like var

// get() // this would be accessed before declaraing
// function get(){
//     console.log("Hello");
    
// }

// media() // this cannot be accessed without declaraing
// const media = function(){
//     console.log("hello");
    
// }