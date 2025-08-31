// function greet(){
//     console.log("Hello, welcome to the JavaScript world!");
    
    
// }
// greet();
// greet();
// greet();


//Add two numbers
//a,b are parameters passesd in function add
// function add(a,b){
//     console.log(a+b);
     
// }
// add(5,10) // 5,10 are arguments passed in function call of add function


//multipy two numbers
// function multiply(x,y){
//     //console.log(x*y);
//     return x*y
    
// }
// //multiply(8,4)
// console.log(multiply(8,6));

// const function1 = function(){
//     console.log("Hello from function expression");
    
// }
// console.log(function1());

//Arrow function
// const fun=() => {
//     console.log("Hello");
    
// }
// fun()

// const sum = (a,b)=>{
//     return a+b
// }
// console.log(sum(8,7));

// const sum = (a,b) => a+b //implicit return we can skip return keyword and curly braces because there is only one statement if we have multiple statements then we have to use curly braces and return keyword
// console.log(sum(8,7));
// const cube = (a) =>{
//     return a*a*a
// }
// console.log(cube(7));

// const cube = (a) => a*a*a
// console.log(cube(7));

// const cube = a =>a*a*a //if there is only one parameter we can skip paranthesis
// console.log(cube(7));

// when we cannot define how many aguments will be passed in function we can use rest operator(...)
// function sum(...num){
//     console.log(num);
    
// }
// sum(9,8,7,6,5,4,3,2,1);
// sum(1,2);
// sum(5,10,15,20,25);

//object and function
const obj = {
    name: "vaishnavi",
    age:21,
    class: "BE",
}
function fun(obj){
    console.log(obj.name,obj.age,obj.class);
    
}
fun(obj)