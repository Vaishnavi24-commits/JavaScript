// const set1 = new Set([1,2,3,4,5]); // it cannot have duplicate values;
// console.log(set1) //Set(5) { 1, 2, 3, 4, 5 };
// console.log(typeof set1) //object;


// const set2 = new Set()
// set2.add(1)
// set2.add('ok')
// set2.add({a:2,v:4})
// set2.add(2)
// console.log(set2) //Set(4) { 1, 'ok', { a: 2, v: 4 }, 2 };
// console.log(set2.size) //4;
// set2.delete(2)
// console.log(set2) //Set(3) { 1, 'ok', { a: 2, v: 4 } };


// const user_id = new Set(["user1","user2","user3"])
// let new_user = "user3"
// console.log(user_id.has(new_user)) //true;


// user_id.clear()
// console.log(user_id) //Set(0) {};


// //convert array to set to remove duplicate values;
// let arr = [1,2,3,4,5,5,4,3,2,1]
// let set1 = new Set(arr)
// console.log(set1) //Set(5) { 1, 2, 3, 4, 5 };

// //convert set to array;
// arr=[...set1]
// console.log(arr);


// let set1 = new Set([1,2,3,4,5])
// let set2 = new Set([4,5,6,7,8])
// //union of two sets;
// let union = new Set([...set1,...set2])
// console.log(union) //Set(8) { 1, 2, 3, 4, 5, 6, 7, 8 };
// //intersection of two sets;
// const result = [...set1].filter((num)=>set2.has(num))
// console.log(result) //[ 4, 5 ];
// const result2 = new Set([...set1].filter((num)=>set2.has(num)))

// //iterate through set;
// //forof
// for(let val of set1){
//     console.log(val);
    
// }
// //forEach
// set1.forEach((val)=>console.log(val));


