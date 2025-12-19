const form = document.querySelector("form")

// form.addEventListener("input",(event)=>{ // any change in form input 
//     console.log(event.target.value); 
    
// })
// form.addEventListener("change",(event)=>{ // when input loses focus
//     console.log(event.target.value);
    
// })

// form.addEventListener("focusin",(event)=>{ 
//            console.log(event.target.value);  // when input gains focus
                                             
// })

// form.addEventListener("focusout",(event)=>{
//     console.log(event.target.value); // when input loses focus
    
// })

// form.addEventListener("click",(event)=>{
//     console.log(event.target.value); // when any part of form is clicked
    
// })


// form.addEventListener("reset",(event)=>{
//     console.log(event.target.value); // when form is reset
    
// })

// form.addEventListener("submit",(event)=>{
//     console.log(event.target.value);
    
// }) //Not USED THIS WAY WRONG WAY

//********************************************************************************************************************************** */

//here we have accessed the form elements and shown in result

// form.addEventListener("submit",(event)=>{

//     event.preventDefault();
//     const first = document.getElementById("first")
//     console.log(first.value);
    
//     const second = document.getElementById("second")
//     console.log(second.value);
//     const third = document.getElementById("third")
//     console.log(third.value);

//     const result = document.getElementById("result")
//     result.innerText=`${first.value} ${second.value} ${third.value}`
// })

/**********************************************************************************************************************************/

form.addEventListener("submit",(event)=>{
    event.preventDefault();


    const data = new FormData(form) // FormData is a built-in object that captures all form data
    for(let [key,value] of data.entries()){
        console.log(key,value);
    }
        
})
 
// Excellent 🔥
// Now you’ve touched REAL-WORLD form handling.
// FormData is industry-standard, so I’ll explain this slowly, clearly, and deeply.

// 🧠 BIG PICTURE (What this code does)

// 👉 User submits form
// 👉 JS automatically collects all inputs
// 👉 You loop through them
// 👉 You get name → value pairs

// No need to manually do:

// getElementById("first").value

// 🔹 Your Code (cleaned formatting)
// form.addEventListener("submit",(event)=>{
//     event.preventDefault();

//     const data = new FormData(form); 

//     for(let [key, value] of data.entries()){
//         console.log(key, value);
//     }
// });

// 🔑 Step-by-Step Explanation
// 1️⃣ Submit event
// form.addEventListener("submit",(event)=>{


// Listens when:

// Submit button clicked

// Enter pressed

// 2️⃣ Stop page reload
// event.preventDefault();


// Same reason as before:

// Stop refresh

// Handle with JS

// 3️⃣ new FormData(form) ⭐ MOST IMPORTANT LINE
// const data = new FormData(form)

// 🧠 What is FormData?

// ✔️ Built-in JavaScript object
// ✔️ Automatically reads all inputs inside the form
// ✔️ Uses name attribute, not id

// It collects:
// <input name="firstName">
// <input name="lastName">
// <input name="age">


// 👉 Output structure:

// firstName → Vaishnavi
// lastName  → Shrivastava
// age       → 19


// ⚠️ If input has no name, it will be ignored.

// 4️⃣ data.entries()
// data.entries()


// 👉 Returns an iterator
// 👉 Each item = [key, value]

// Example:

// ["firstName", "Vaishnavi"]

// 5️⃣ for...of loop (Destructuring)
// for (let [key, value] of data.entries())


// This means:

// key = input name

// value = input value

// Console output:
// firstName Vaishnavi
// lastName Shrivastava
// age 19


// 🔥 Very clean, very powerful.

// 🧠 WHY THIS IS BETTER THAN getElementById
// getElementById	FormData
// Manual	Automatic
// More code	Less code
// Not scalable	Scales well
// Beginner	Professional

// 👉 Forms with 20 inputs → FormData wins.

// ⚠️ IMPORTANT RULES (EXAM + INTERVIEW)
// ❗ 1. name attribute is mandatory
// <input id="first" name="firstName">


// Without name → FormData ❌

// ❗ 2. Values are ALWAYS strings

// Even for:

// <input type="number">


// Convert if needed:

// Number(value)

// ❗ 3. Checkboxes / Radio behave differently

// Unchecked → NOT included

// Checked → included

// 🔥 REAL USE CASE (How pros use it)
// Convert FormData → Object
// const obj = {};
// for (let [key, value] of data.entries()) {
//     obj[key] = value;
// }
// console.log(obj);


// Output:

// {
//   firstName: "Vaishnavi",
//   lastName: "Shrivastava",
//   age: "19"
// }


// 👉 Perfect for:

// API calls

// Backend submission

// Validation

// 🚀 BONUS: One-line version 😎
// const obj = Object.fromEntries(new FormData(form));


// 🔥 This is advanced JS — remember it.

// 🧠 THINKING PATTERN (VERY IMPORTANT)

// Ask:
// 1️⃣ Do I need each input manually? ❌
// 2️⃣ Do I need scalable form handling? ✅
// 3️⃣ Do I need clean data? ✅

// ➡️ Use FormData.