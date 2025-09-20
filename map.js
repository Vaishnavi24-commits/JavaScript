// const arr= [1,2,3,4,5]
// // const result = arr.map((num)=> {
// //     return num*num
// // })
// const result = arr.map(num=> num*num)
// console.log(result);
// //output
// //[ 1, 4, 9, 16, 25 ]




//chaining of filter and map
// arr=[1,2,3,4,5]
// const result = arr.filter((num)=>num%2==0) . map(num=>num*num)
// console.log(result);
// //output
// //[ 4, 16 ]

//creating a map 
// const map1 = new Map()
// map1.set(9,8)
// map1.set("Rohit",898)
// map1.set(true,"ok")
// console.log(map1) //Map(3) { 9 => 8, 'Rohit' => 898, true => 'ok' };
// map1.set("Rohit",990)//it will update the value of key "Rohit"
// console.log(map1) //Map(3) { 9 => 8, 'Rohit' => 990, true => 'ok' };
// map1.delete(9)
// console.log(map1) //Map(2) { 'Rohit' => 990, true => 'ok' };
// console.log(map1.has("Rohit"));//true
// console.log(map1.size); //2
// map1.clear()
// console.log(map1) //Map(0) {};


// const map1 = new Map([
//     [1,'a'],
//     ['a','b'],
//     [3,9]
// ])
// console.log(map1) //Map(3) { 1 => 'a', 'a' => 'b', 3 => 9 };
// for(let val of map1){
//     console.log(val);
    
// }
// for(let [key,val] of map1){
//     console.log(key,val);
    
// }
