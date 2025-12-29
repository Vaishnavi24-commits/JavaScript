const { set } = require("lodash");

//Step 1: Basic async function (data fetch)
function fetchData(callback) {
    console.log("Fetching data.....");

    setTimeout(()=>{
        console.log("user details fectched successfully");

        const user = {name:"John Doe",age:30,city:"New York"};
        callback(user)
    },2000)

    
}
    
// 🟢 Step 2: Callback functions (operations)

function greet(user){
    console.log(`hello ${user.name}`);
    
}

function meet (user){
    console.log(`hello ${user.name} I will meet you at ${user.city}`);
    
}

function edit(user){
    console.log(`editing profile of ${user.name}`);
    
}

function age(user){
    console.log(`your age is ${user.age}`);
    
}
//Step 3: Single callback call
//fetchData(greet)
//fetchData(meet);
//fetchData(edit);
//fetchData(age)


fetchData((user)=>{
    greet(user);
    setTimeout(()=>{
        meet (user);
    
   setTimeout(()=>{
     edit(user);
    
   setTimeout(()=>{
    age(user);
    },2000)

    },2000)

},2000)
});