//reduce-to obtain result by iterating over each element of array
//const result = array.reduce(callbackfunction,initial value)
// const array = [1,2,3,4,5];
// const result = array.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// },0)
// console.log(result) //sum of all elements in array;

// const result = array.reduce((accumulator, currentValue)=> accumulator + currentValue,0)
// console.log(result) //sum of all elements in array;

// let arr = ['orange', 'apple', 'banana', 'grape', 'orange', 'apple', 'banana'];
// const result = arr.reduce((accumulator, currentValue)=>{
//     if(accumulator.hasOwnProperty(currentValue)){
//         accumulator[currentValue]++
//     }
//     else{
//         accumulator[currentValue] = 1;
//     }
//     return accumulator;
// }, {})
// console.log(result) //{orange:2, apple:2, banana:2, grape:1

// const result = arr.reduce((acc,curr)=>{
//     arr.hasOwnProperty(curr)?acc[curr]++:acc[curr]=1
//     return acc
// },{})
// console.log(result) //{orange:2, apple:2, banana:2, grape:1

