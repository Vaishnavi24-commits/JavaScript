//acessing element by id
// const obj = document.getElementById("first");
// console.log(obj);

//************************************************************************* */

// //ACESSING ELEMENT BY CSS SELECTOR
// const id = document.querySelector("#first")

// const id2 = document.querySelector('.header3')
// //console.log(id2);
// //id2.style.backgroundColor = "pink"

// const id3 = document.querySelector('.header1')
// console.log(id3);// will only select the first element with class header1

 //const id4 = document.querySelectorAll('.header1')
 //console.log(id4);// will select all the elements with class header1 and return a node list

// how to iterate through node list
//Method 1- Normal for loop 
// for(let i=0;i<id4.length;i++){
//     console.log(id4);
    
// }

//Method 2- for..of loop
// 
            // for(let element of id4){
            //     console.log(element);
            // }


// //Method 3- forEach loop
// id4.forEach((element=>{
//     console.log(element);
// }))


// Now map wagera nhi lag sakta node list pe so hum array me convert karenge
//Array.from(id4) // converts node list to array

//************************************************************************************ */


//accessing element by tag name
// const tag = document.getElementsByTagName("h1")
// console.log(tag);// returns html collection of all h1 tags

// let team = document.getElementsByTagName("li")
// console.log(team);// returns html collection of all li tags

// console.log(team[0]);
// console.log(team[1]);




//iterating through html collection
// for(let i=0;i<team.length;i++){
//     team[i].style.backgroundColor = "lightblue";
// }

// for(let val of team){
//     console.log(val);
    
// }

//for each loop nahi chal sakta html collection pe that works only on array and node list

// console.log(Array.from(team));// converting html collection to array

// Array.from(team).forEach((val=>{
//     console.log(val);
    
// }))

//********************************************************************************************** */

//Acessing element by relationship
//i) parent node/parent element
// const list = document.querySelector("li")
// console.log(list.parentNode);// gives parent node of the selected element
// console.log(list.parentElement);// gives parent element of the selected element

//ii) child nodes/child elements
// const list2 = document.querySelector("ul")
// console.log(list2);
// console.log(list2.childNodes); // gives all child nodes including text nodes text node are the spaces between the elements even empty lines are considered as text nodes
// console.log(list2.children);// gives only child elements excluding text nodes in a html collection

// //iii) first child/first element,last child/last element
// console.log(list2.firstChild);
// console.log(list2.firstElementChild);
// console.log(list2.lastChild);
// console.log(list2.lastElementChild);

// //iv) next sibling/next element sibling, previous sibling/previous element sibling
// const list3 = document.querySelector("h2")
// console.log(list3);
// console.log(list3.nextSibling);
// console.log(list3.nextElementSibling);
// console.log(list3.previousSibling);
// console.log(list3.previousElementSibling);



//*********************************************************************************************** */

//innerHTML vs innerText vs textContent

// const header1 = document.getElementById("first")
// console.log(header1);
// console.log(header1.innerHTML);
// //Hello, DOM!<strong>Vaishnavi</strong> // output of innerHTML it shows everything including html tags
// console.log(header1.innerText);
// //Hello, DOM!Vaishnavi // output of innerText it shows only the text that is visible on the page
// //it takes styles into consideration like if display is none it will not show that text
// console.log(header1.textContent);
// //Hello, DOM!Vaishnavi // output of textContent it shows all the text including the hidden text
// //it does not take styles into consideration it shows everything












