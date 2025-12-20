// const original_answer = ["Sachin Tendulkar","West Indies","Sachin Tendulkar","264","Muttiah Muralitharan"]
// const form = document.querySelector("form");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault()
//     const data = new FormData(form)
//     const answer = Array.from(data.values())
//     let result=0
//     for(let i=0;i<answer.length;i++){
//         if(answer[i]==original_answer[i]){
//             result++
//         }
//     }
//     const out=document.getElementById("out")
//     out.textContent= `${result}/out of 5`
// })


const original_answer = {
    q1: "Sachin Tendulkar",
    q2: "West Indies",
    q3: "Sachin Tendulkar",
    q4: "264",
    q5: "Muttiah Muralitharan"
}
const form = document.querySelector("form")
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    const data = new FormData(form)
    let result=0
    for(let[key,values] of data.entries()){
        if(values===original_answer[key]){
            result++
        }
    }
        const out = document.getElementById("out")
        out.textContent=`${result} / out of 5`

    
})
// 🧠 Big Picture (what this version does)

// Stores correct answers as key–value pairs

// Reads submitted answers

// Matches answers using question names (q1, q2…)

// Counts correct answers

// Displays score

// This is more professional logic 👍

// 1️⃣ original_answer object (VERY IMPORTANT CONCEPT)
// const original_answer = {
//     q1: "Sachin Tendulkar",
//     q2: "West Indies",
//     q3: "Sachin Tendulkar",
//     q4: "264",
//     q5: "Muttiah Muralitharan"
// }


// 👉 This is a JavaScript object

// Think of it like:

// question name  → correct answer


// Example:

// q1 → "Sachin Tendulkar"

// q4 → "264"

// Why this is GOOD:

// No need to care about order

// Direct comparison using question name

// Safer than array indexing

// 2️⃣ Selecting the form
// const form = document.querySelector("form")


// 👉 Selects the <form> element
// 👉 Stores it in form variable

// 3️⃣ Listening to submit event
// form.addEventListener("submit",(event)=>{


// 👉 Runs when user clicks Submit

// 4️⃣ Prevent page reload
// event.preventDefault()


// 👉 Stops browser’s default behavior (refresh)

// 5️⃣ Reading submitted data
// const data = new FormData(form)


// 👉 Collects form input data

// Internally it becomes like:

// q1 → "Sachin Tendulkar"
// q2 → "West Indies"
// q3 → "Sachin Tendulkar"
// q4 → "264"
// q5 → "Muttiah Muralitharan"

// 6️⃣ Initialize score
// let result = 0


// 👉 Starts score from zero

// 7️⃣ Loop through form answers (CORE LOGIC)
// for(let [key, values] of data.entries()){


// This line is VERY IMPORTANT.

// What happens here?

// data.entries() gives pairs

// Each pair looks like:

// key    = "q1"
// values = "Sachin Tendulkar"


// Next loop:

// key    = "q2"
// values = "West Indies"


// So for every question:

// key = question name

// values = selected option

// 8️⃣ Compare user answer with correct answer
// if(values === original_answer[key]){
//     result++
// }


// Example for q1:

// values = "Sachin Tendulkar"
// original_answer["q1"] = "Sachin Tendulkar"


// ✔ Match → result++

// If not match → nothing happens

// 9️⃣ Display result (WHAT YOU DID)
// const out = document.getElementById("out")
// out.textContent = `${result} / out of 5`


// 👉 Shows score in HTML

// ⚠️ ONE IMPORTANT IMPROVEMENT (logic still works, but…)

// Right now, this runs inside the loop, meaning:

// Score is updated after every question

// Unnecessary DOM updates

// ❌ Current behavior
// Loop 1 → update output
// Loop 2 → update output
// Loop 3 → update output
// ...

// ✅ Best practice: move it OUTSIDE loop
// ✅ Improved (BEST) version
// const original_answer = {
//     q1: "Sachin Tendulkar",
//     q2: "West Indies",
//     q3: "Sachin Tendulkar",
//     q4: "264",
//     q5: "Muttiah Muralitharan"
// }

// const form = document.querySelector("form")

// form.addEventListener("submit",(event)=>{
//     event.preventDefault()

//     const data = new FormData(form)
//     let result = 0

//     for(let [key, values] of data.entries()){
//         if(values === original_answer[key]){
//             result++
//         }
//     }

//     const out = document.getElementById("out")
//     out.textContent = `${result} / out of 5`
// })

// 🧠 WHY THIS VERSION IS BEST

// ✔ No dependency on order
// ✔ Cleaner logic
// ✔ Easier to add/remove questions
// ✔ Real-world quiz logic