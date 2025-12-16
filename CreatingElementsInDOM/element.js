//creating any element with the help of JS
// creating a list
// const element = document.createElement("li")
// element.innerHTML = "Never give up"

// const parentofElement = document.getElementById("root")
// parentofElement.appendChild(element)

// when we want to add multiple elements so we can make a function for it
// function createlist(item){
//     const element = document.createElement("li")
//     element.innerHTML = item
//     const parentofElement = document.getElementById("root")
//     //parentofElement.appendChild(element) //here we can give only one element at a time
//     parentofElement.append(element , "Vaishnavi") //here we can give multiple elements at a time
// }
// createlist("Stay focused")
// createlist("Stay positive")
// createlist("Stay motivated")

//**************************************************************************************************** */

//creating a textnode
// const textnode = document.createTextNode("You can do it ")
// const parentofTextnode = document.getElementById("root")
// parentofTextnode.appendChild(textnode)

//********************************************************************************************************* */

//creating a attributenode
// const attributenode = document.createAttribute("id")
// attributenode.value = "first"

//access to first child
// const currentElement = document.querySelector("li")
// currentElement.setAttributeNode(attributenode)

//second child access
// const parent = document.getElementById("root")
// parent.children[1].setAttributeNode(attributenode)

//********************************************************************************************************* */

//accessing attribute of a element
// const element = document.getElementById("root")
// console.log(element.getAttribute("id"));
// console.log(element.getAttribute("class"));

// element.setAttribute("custom","20") //setting a new attribute by this method
// element.setAttribute("class","7") // changing the existing attribute value by this method
// element.removeAttribute("custom")// removing an attribute by this method

/******************************************************************************************************** */

//Add nodes to the DOM
// const parent = document.getElementById("root")
// const newElement = document.createElement("li")
// newElement.innerHTML = "Believe in yourself"

// parent.prepend(newElement) // adds the element at the beginning
// parent.append(newElement) // adds the element at the end

//  const child = parent.children[1]
// // parent.insertBefore(newElement,child) // adds the element before the specified child

// parent.replaceChild(newElement,child) // replaces the specified child with new element



//USING INNERHTML 
//const parent1 = document.getElementById("root")
//parent1.innerHTML = " YOU WILL MAKE IT"// replaces the entire content of the parent element with the specified HTML content 
//parent1.innerHTML += " <li> NEVER GIVE UP </li> " // adds the specified HTML content to the end of the parent element's existing content

//using insertAdjacentElement()
// const parent2 = document.getElementById("root")
// const element = document.createElement("div")
// element.innerHTML = "keep pushing your limits"
//parent2.insertAdjacentElement("beforebegin",element) // adds the element before the parent element itself
//parent2.insertAdjacentElement("afterbegin",element) // adds the element as the first child of the parent element
//parent2.insertAdjacentElement("beforeend",element) // adds the element as the last child of the parent element
//parent2.insertAdjacentElement("afterend",element) // adds the element after the parent element itself

// ***************************************************************************************************
// document.querySelector("li").remove()// removes the first matching element from the DOM
// removeChild(node) // removes the specified child node from the parent element