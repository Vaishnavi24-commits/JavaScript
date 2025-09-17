// let obj = {
//     name:"vaishnavi",
//     age:28,
//     city:"dewas",
//     gender:"female"

// }
//for-in loop
// for(let a in obj){
//     console.log(a); // it will iterate over keys in obj
    
// }
// for(let values in obj){
//     console.log(obj[values]);
    
// }

//console.log(Object.keys(obj)); // this will also return keys of object in array form


// let obj2=Object.create(obj)
// obj2.id="Roh"
// obj2.amount=9889
// //console.log(obj2);
// //console.log(Object.keys(obj2)); //[ 'id', 'amount' ] output is array of only the exclusive obj2 keys jo keys uski khudki houngi sirf usko access krta h
// for(let keys in obj2){
//     console.log(keys); //id amount name age city gender this is the output keys of both obj2 and obj it prints the keys of inherited values also
    
// }

// FOR OF LOOP - used when we want to loop over values
// const a = [1,2,3,4]
// for(let val of a){
//     console.log(val);
    
// }
// let str = "Im a good girl"
// for(let val of str){
//     console.log(val);
    
// }

//do not use for of loop in obj
// let obj = {
//     name:"vaishnavi",
//     age:18,
//     job:"Microsoft SDE"
// }
// for(let val of obj){
//     console.log(val);
    
// }
//output:TypeError: obj is not iterable obj is stored in key val pair the we dont know the memory location of the next key val pair in obj that is why it is not iteratable .... symbol.iteratable is not defined for obj



//phir bhi if we want to iterate object from for of loop we use Object.values(name of object) this gives the values in array form and then we can iterate over it 
// for(let val of Object.values(obj)){
//     console.log(val);
    
// }

// FOR EACH loop to iterate over array
//let a = [10,20,30,40]
//GOOO TOOO CALL BACK FUNCTION file
//arr.forEach(callbackfunction)


// a.forEach(function(num){
//     console.log(num);
    
// })
// //output
// 10
// 20
// 30
// 40

// a.forEach((num,index)=>{
//     console.log(num,index);
    
// })
//we can give atmost three arguments in for Each loop
//first argument always mention-val
//second argument always mentions-index
//third argument always mentions -array itself

// a.forEach((n,i,a)=>{
//     a[i]=n*2

// })
// console.log(a);
