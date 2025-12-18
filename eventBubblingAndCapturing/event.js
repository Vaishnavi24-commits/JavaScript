const grandParent = document.getElementById("grandParent")
const parent = document.getElementById("parent")
const child = document.getElementById("child")
//event Bubbling and event capturing
//by default bubbling hi chalta h
// addEventListener has three properties addEventListener("first_event",callback,capture) if capture is true capture chalega otherwise default m false hi rehta h no capture

// child.addEventListener('click',()=>{
//     console.log('child clicked');
    
// },false)

// parent.addEventListener('click',()=>{
//     console.log('parent clicked');
    
// },false)

// grandParent.addEventListener('click',()=>{
//     console.log('grandParent clicked');
    
// },false)

// output of when i clicked child
// child clicked
// event.js:14 parent clicked
// event.js:19 grandParent clicked
// event.js:14 parent clicked
// 2event.js:19 grandParent clicked

// child.addEventListener('click',()=>{
//     console.log('child clicked');
    
// },true)

// parent.addEventListener('click',()=>{
//     console.log('parent clicked');
    
// },true)

// grandParent.addEventListener('click',()=>{
//     console.log('grandParent clicked');
    
// },true)
// output - "i clicked child"

// grandParent clicked
// event.js:36 parent clicked
// event.js:31 child clicked
// event.js:41 grandParent clicked
// event.js:36 parent clicked
// event.js:41 grandParent clicked

// child.addEventListener('click',()=>{
//     console.log('child clicked');
    
// },true)

// parent.addEventListener('click',()=>{
//     console.log('parent clicked');
    
// },false)

// grandParent.addEventListener('click',()=>{
//     console.log('grandParent clicked');
    
// },true)

//output when clicked child first 
// grandParent clicked
// event.js:54 child clicked
// event.js:59 parent clicked

// event.js:64 grandParent clicked // parent click
// event.js:59 parent clicked

// event.js:64 grandParent clicked // grandparent click

// child.addEventListener('click',()=>{
//     console.log('child clicked');
    
// },false)

// parent.addEventListener('click',()=>{
//     console.log('parent clicked');
    
// },true)

// grandParent.addEventListener('click',()=>{
//     console.log('grandParent clicked');
    
// },false)

// // output
// // child click!
// // parent clicked
// // event.js:79 child clicked
// // event.js:89 grandParent clicked

// // parent click!
// // parent clicked
// // event.js:89 grandParent clicked

// //grandparent clicked!
// // grandParent clicked




//who triggered the event

child.addEventListener('click',(event)=>{
    console.log(event.target); // gives the target value The element where the click ACTUALLY happened
    console.log(event.currentTarget); // gives the current target value The element whose listener is currently running
    
    
     console.log('child clicked');
    
 },false)


  parent.addEventListener('click',(event)=>{
    console.log(event.target);
     console.log(event.currentTarget); // gives the current target value
    
    
     console.log('parent clicked');
    
 },false)

 grandParent.addEventListener('click',(event)=>{
    console.log(event.target);
     console.log(event.currentTarget); // gives the current target value
    
    
     console.log('grandParent clicked');
    
 },false)

//  When you clicked CHILD
// <div id="child"></div>
// child clicked
// <div id="child"></div>
// parent clicked
// <div id="child"></div>
// grandParent clicked

// 
// When you clicked PARENT
// <div id="parent"></div>
// parent clicked
// <div id="parent"></div>
// grandParent clicked

// When you clicked GRANDPARENT
// <div id="grandParent"></div>
// grandParent clicked


// I’ll explain this using YOUR exact code + YOUR console output, very calmly and clearly.

// 🔁 First, remember your setup

// DOM structure:

// grandParent
//  └── parent
//       └── child


// Event listeners are added on all three
// All are in bubbling phase (false).

// 🧠 Core definitions (VERY IMPORTANT)
// ✅ event.target

// 👉 The element where the click ACTUALLY happened

// 🔹 This NEVER changes during bubbling
// 🔹 Always points to the deepest clicked element

// ✅ event.currentTarget

// 👉 The element whose listener is currently running

// 🔹 This CHANGES while bubbling
// 🔹 Depends on which listener is executing

// 🖱️ CASE 1: When you CLICK on CHILD
// 🔹 Console output (in order):
// <div id="child"></div>
// <div id="child"></div>
// child clicked

// <div id="child"></div>
// <div id="parent"></div>
// parent clicked

// <div id="child"></div>
// <div id="grandParent"></div>
// grandParent clicked

// 🧠 Explanation step-by-step
// 🔸 Child listener runs first
// event.target        → child
// event.currentTarget → child


// ✔ Because:

// You clicked child

// Child’s listener is running

// 🔸 Parent listener runs next (bubbling)
// event.target        → child
// event.currentTarget → parent


// ✔ Why?

// Click still happened on child

// But now parent’s listener is executing

// 🔸 GrandParent listener runs last
// event.target        → child
// event.currentTarget → grandParent


// ✔ Same logic:

// Target stays child

// Current target becomes grandParent

// 🧠 ONE GOLDEN RULE (remember forever)

// 🔥 event.target never changes
// 🔥 event.currentTarget changes with bubbling

// 🖱️ CASE 2: When you CLICK on PARENT

// Console:

// <div id="parent"></div>
// <div id="parent"></div>
// parent clicked

// <div id="parent"></div>
// <div id="grandParent"></div>
// grandParent clicked

// Explanation:

// Target = parent (click happened here)

// First currentTarget = parent

// Then currentTarget = grandParent

// 🖱️ CASE 3: When you CLICK on GRANDPARENT

// Console:

// <div id="grandParent"></div>
// <div id="grandParent"></div>
// grandParent clicked


// ✔ Both are same because:

// Click happened on grandParent

// Only its listener runs

// 🧠 Interview-ready one-liner 💥

// target = where the event originated
// currentTarget = who is handling the event right now

// 🔥 WHY this is super important?

// This concept is used in:

// Event Delegation

// Optimized JS

// Real-world apps (menus, lists, cards)

// Interview questions (very common!)