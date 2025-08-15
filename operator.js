// let num = 3%6 // modulus gives remainder
// console.log(num);

const { log } = require("console");

// let sum = 456
// //let total = sum++;
// let sotal = --sum; // pre-decrement
// console.log(sum);
// // console.log(total); // total will be 456, sum will be 457 due to post-increment
//  console.log(sotal); // sotal will be 455, sum will be 456 due to pre-decrement

// //comparison operators
// //number to number comparison
// let a=7
// let b=9
// //console.log(a==b);
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);

//number to string comparison
//  let c = '7';
//  let d = 7;
//  console.log(c == d); // true, value is same
// let a1 = '7'
// let b1 = 9
// console.log(a1<b1);
// let a1 = '7c'
// let b1 = 9
// console.log(a1<b1);

// let a='7'
// let b = 7
// console.log(a===b); // false , === type check,then compare value

//rules
// null == undefined // true // null is only equivlent to undefined and baki kisi k bi equialent nhi h null 
// null === undefined // false, type check
// console.log(null==undefined); // true
// console.log(null===undefined);//false

// console.log(null == 0); // false
// console.log(null === 0); // false
// console.log(null>0);//idhar type m conversion ho rha h null is converted to 0 and then compared
// console.log(null<0);
// console.log(null>=0); // true // null is considered as 0 in this case
// console.log(null<=0); // true

// console.log(undefined == 0);
// console.log(undefined <0); //NAN m convert hoga
// console.log(undefined > 0);
// console.log(undefined >= 0);
// console.log(undefined <= 0); 

// console.log(undefined == undefined);
// console.log(NaN == NaN);//because NaN is not equal to anything, even itself like say
// let str = 'hello';
// let str1 = 'helloouuuu'; // these two when converted to numbers will give NaN but they are not equal

// let abc1 = 123
// let abc2 = '123'
// let abc3 = 123;

// console.log(abc1 === abc2 === abc3); // false, type check, abc1 is number, abc2 is string, so false === abc3 will be false


// console.log(undefined != null); // true, undefined is not equal to null
// console.log(undefined !== null); // true, type check, undefined is not equal to null


//bitwise operators
// console.log(5&7); // 5 = 101, 7 = 111, bitwise AND gives 101 which is 5 in decimal
// console.log(5|7); // 5 = 101, 7 = 111, bitwise OR gives 111 which is 7 in decimal
// console.log(5^7); // 5 = 101, 7 = 111, bitwise XOR gives 010 which is 2 in decimal
// console.log(~5); // bitwise NOT gives 10 in decimal, which is -6 in decimal
// console.log(5<<2); // left shift by 2 gives 20 in decimal, which is 10100 in binary
// console.log(5>>2); // right shift by 2 gives 1 in decimal, which is 00001 in binary
// console.log(5>>>2); // unsigned right shift by 2 gives 1 in decimal, which is 00001 in binary
// console.log(5>>>3); // unsigned right shift by 3 gives 0 in decimal, which is 00000 in binary
// console.log(5<<3); // left shift by 3 gives 40 in decimal, which is 101000 in binary    



