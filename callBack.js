// function names(fun){
//     console.log("Hello I am name");
//     fun()
// }

// function greet(){
//     console.log("I am call back function");
    
// }
//names(greet); // when we pass a function as an argument in another function so this is called call back function

//it can be done like this too
// function names(fun){
//     console.log("Hello I am name");
//     fun()
// }
// names(function greet(){
//     console.log("I am call back function");
    
// })

// // it can be done as arrow func also
// function names(fun){
//     console.log("Hello I am name");
//     fun()
// }
// names(()=>{
//     console.log("I am call back function")
    
// })


// real world use case - the website is changing its data in every 5s and we have to fetch that data to our site
// function fetchData(){
//     console.log("fetching data");
    
// }
// setInterval(fetchData,5000) //5000ms = 5s