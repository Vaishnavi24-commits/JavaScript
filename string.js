// // ways to declare strings in JavaScript:
// let str1 = "Hello, World!";
// let str2 = 'JavaScript is fun!';
// let str3 = `vaishnavi learning Js`
// console.log(str1);
// console.log(str2);
// console.log(str3);

// let price = 50
// console.log(`The price of tomato is ${price} rupees.`);

// //"" '' bhi agar print karna ho toh
// console.log('"Vaishnavi"');
// console.log("'Vaishnavi Shrivastava'");

// espace character '\' isse next word ka meaning bina smjhe bss print kar dete h
// console.log("Vaishnavi\nShrivastava");
// console.log("Vaishnavi\\nShrivastava");

// string k har character ka index hota hai so to print each character of string
// 
// let str = "Vaishnavi";
// console.log(str.charAt(0));
// console.log(str.charAt(1));
// console.log(str.charAt(2));
// console.log(str.charAt(3));
// console.log(str.charAt(4));
// console.log(str.charAt(5));
// console.log(str.charAt(6));
// console.log(str.charAt(7));
// console.log(str.charAt(8));

// let str = "Vaishnavi";
// console.log(str.toUpperCase());
//  console.log(str.toLowerCase());
//  console.log(str); // original string change nahi hoti
 
//index of of a substring in a string
//  let str= "Vaishnavi Shrivastava is learning JavaScript";
// console.log(str.indexOf("Shrivastava")); // returns the index of the first character occurrence of the substring
// console.log(str.indexOf("kait")); // -1 (not found)
// 

// extracting a substring from a string
// slice can take negative indices as well, which count from the end of the string
// let str = "Hello Miss Vaishnavi Shrivastava";
// // console.log(str.slice(6,8)); // extracts characters from index 6 to 7 (8 is not included)
// // console.log(str.slice(6)); // extracts characters from index 6 to the end of the string
// // console.log(str.slice(-8)); // extracts the last 8 characters of the string
// // console.log(str.slice(-8, -1)); // extracts characters from the 8th last to the 2nd last character
// //  console.log(str.slice(6, 6)); // extracts an empty string (no characters between index 6 and 6)

// // substr is similar to slice but it takes the starting index and the length of the substring it cannot take negative indices
// console.log(str.substr(6,2));// extracts 2 characters starting from index 6
//  console.log(str.substr(6)); // extracts characters from index 6 to the end of the string
// console.log(str.substr(-8)); // extracts the last 8 characters of the string
//  console.log(str.substr(-8, 2)); // extracts 2 characters starting from the 8th last character
//  console.log(str.substr(6, 0)); // extracts an empty string (no characters to extract)

// // replace a substring in a string
//  let str = "Vaishnavi Shrivastava is learning JavaScript Vaishnavi";
// //  console.log(str.replace("Vaishnavi","Nanu"));// replaces the first occurrence of "Vaishnavi" with "Nanu"
//  console.log(str.replaceAll("Vaishnavi","Nanu"));// replaces all occurrences of "Vaishnavi" with "Nanu"
 
// split the string into an array of substrings using a delimiter
//let str = "Money!Sunny!Honey!Bunny";
// console.log(str.split("!")); // splits the string into an array of substrings using "!" as the delimiter
// console.log(str.split("")); // splits the string into an array of individual characters
// console.log(str.split(" ", 2)); // splits the string into an array of substrings using space as the delimiter, but only returns the first 2 substrings
// console.log(str.split(" ", -1)); // splits the string into an array of substrings using space as the delimiter, but returns all substrings (negative value is ignored)

// trim removes whitespace from both ends of a string
// let str = "   Hello, World!   ";
// console.log(str.trim()); // removes whitespace from both ends of the string
//  console.log(str.trimStart()); // removes whitespace from the start of the string
// console.log(str.trimEnd()); // removes whitespace from the end of the string

// //latest way to declare strings
// let str = new String("Hello Miss Vaishnavi Shrivastava");
// console.log(str); // creates a String object
// console.log(typeof str);
// // by using the new keyword the memory is allocated not in stack memory but in heap memory so the type of str is object and not string as primitive type
