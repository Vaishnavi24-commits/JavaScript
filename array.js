// const arr = [2.3,4,5,6,7,'rohit',true,true]
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[5]);
// console.log(arr.at(1));
// console.log(arr.at(-1));//at is latest it can take negative index
// console.log(arr[-3]);// undefined, negative index is not supported in arrays

// const newarr = arr
// console.log(newarr);
// console.log(newarr==arr); // they will point to the same memory location so they are equal


// //if we do not want to point them tto same location we will use structured clone
// const newarr1 = structuredClone(arr)
// console.log(newarr1==arr); // false, they are not equal now as they are pointing to different memory locations

//adding element at end of array
// arr.push(25)
// arr.push('vaishnavi')
// console.log(arr);
// //removing element from end of array
// arr.pop() // removes last element and space and memory is also cleared
// console.log(arr);

//adding element at start of array
// arr.unshift(55)
// arr.unshift('nanu')
// console.log(arr);
//delete element from start of array


// to remove element from specific index using delete but it will not remove the space it will create a hole in the array
// delete arr[2]
// console.log(arr); // [55, 'nanu', <1 empty item>, 5, 6, 7, 'rohit', true]

// console.log(arr.indexOf(true)); // returns index of first occurrence of element, if not found it will return -1
// console.log(arr.lastIndexOf(true)); // returns index of last occurrence of element, if not found it will return -1

// console.log(arr.includes(7)); // returns true if element is present in array, false otherwise

// console.log(arr.slice(2,5)); // returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// console.log(arr); // original array is not modified

// console.log(arr.splice(2,5));
// console.log(arr); // original array is modified, it removes 5 elements starting from index 2 and returns the removed elements
//console.log(arr.splice(starting index, number of elements to be removed, elements to be added)); // we can also add elements at the same time while removing elements
// arr.splice(2,3,'a','b','c')
// console.log(arr); // original array is modified, it removes 3 elements starting from index 2 and adds 'a','b','c' at index 2
// console.log(arr.splice(2,0,'a','b','c')); // it will not remove any element but will add 'a','b','c' at index 2
// console.log(arr); // original array is modified

// console.log(arr.toString());// converts array to string
// console.log(arr.join('*')); // joins all elements of array into a string with specified separator
// console.log(arr.join()); // joins all elements of array into a string with comma as separator by default


//concatenation of two arrays
 let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let arr3 = arr1.concat(arr2) // it will not modify the original arrays
// console.log(arr3);

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let arr4 = [7,8,9]
// let arr3 = arr1.concat(arr2,arr4) // it will not modify the original arrays
// console.log(arr3);


// arr1.push(arr2)
// console.log(arr1); // it will add arr2 as a single element at the end of arr1

//creating 2d array
// arr2d = [[1,2,3],[4,5,6],[7,8,9]]
// // console.log(arr2d);
// // console.log(arr2d[1][1]); // accessing element at row 1 and column 1 (0-based index)
// // console.log(arr2d[2][0]); // accessing element at row 2 and column 0 (0-based index)
// newarr = arr2d.flat() // it will flatten the 2d array to 1d array
// console.log(newarr);

//to confirm the given input is array or not
 console.log(Array.isArray(arr1)); // true







