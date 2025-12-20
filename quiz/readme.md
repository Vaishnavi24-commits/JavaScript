Okay Vaishnavi, I’ll explain this HTML ONCE, calmly, from zero level, so you understand what you wrote and why it works.
No rushing. Read slowly 👇

1️⃣ <!DOCTYPE html>
<!DOCTYPE html>


👉 This tells the browser:
“This file is written in modern HTML (HTML5)”
Without this, browser can behave weirdly.

2️⃣ <html lang="en">
<html lang="en">


👉 This is the root of the page.
Everything must be inside <html> ... </html>
lang="en" means content is in English (good for accessibility & SEO).

3️⃣ <head> section (page setup)
<head>


This part is not visible on the page.
It contains settings & links.

a) Character encoding
<meta charset="UTF-8">


👉 Allows symbols, emojis, Hindi/English letters properly.

b) Responsive design
<meta name="viewport" content="width=device-width, initial-scale=1.0">


👉 Makes website look good on mobile, tablet, laptop.

c) Page title
<title>Criket Quiz</title>


👉 This is the browser tab name.

d) CSS link
<link rel="stylesheet" href="style.css">


👉 Connects style.css to this HTML
So your page gets colors, spacing, design.

4️⃣ <body> (visible content)
<body>


👉 Everything inside body is what user sees on screen.

5️⃣ Main container
<div class="container">


👉 A wrapper box
Used for:

centering content

styling whole quiz

clean layout

6️⃣ Heading
<h1>Cricket Quiz</h1>


👉 Main heading of your page.

7️⃣ <form> (VERY IMPORTANT)
<form>


👉 This tells browser:

“User will input data and submit it”

Your quiz works because of form.

8️⃣ Each question block
<div class="question">


👉 One question = one box
Easy to style + easy to understand.

9️⃣ Question text
<p>1. Who has the most centuries in international cricket?</p>


👉 <p> is for normal text / paragraph.

🔟 Radio buttons (MOST IMPORTANT PART)

Example:

<input type="radio" name="q1" value="Sachin Tendulkar">

What happens here?

type="radio" → circular option

name="q1" → groups options

same name = only one can be selected

value="Sachin Tendulkar" → answer stored in JS

That’s why all options of Q1 use name="q1"
Q2 uses q2, Q3 → q3, etc.

✔ This is 100% correct logic.

1️⃣1️⃣ <label>
<label>
    <input type="radio"> Sachin Tendulkar
</label>


👉 Makes text clickable
User can click name OR circle → better UX.

1️⃣2️⃣ Submit button
<button type="submit" class="submit-btn">Submit</button>


👉 When clicked:

Form tries to submit

Page reloads (by default)

JS will stop reload using event.preventDefault()

This button is placed correctly 👍

1️⃣3️⃣ Result containers
<div class="result" id="result"></div>
<div id="out"></div>


👉 Empty now
👉 JS will later:

calculate score

insert result text here

1️⃣4️⃣ JavaScript link (LAST LINE)
<script src="quiz.js"></script>


👉 Loads JS after HTML is ready
Best practice ✔
Your JS will:

read answers

check correctness

show score


🧠 Big Picture (what this code does)

// Stores correct answers

// Waits for Submit button click

// Stops page reload

// Reads user’s selected answers

// Compares them with correct answers

// Counts score

// Displays score on screen

// That’s it.

// 1️⃣ original_answer (Correct answers)
// const original_answer = ["Sachin Tendulkar","West Indies","Sachin Tendulkar","264","Muttiah Muralitharan"]


// 👉 This is an array that stores the correct answers
// 👉 Order is VERY important

// Index mapping:

// original_answer[0] → Q1
// original_answer[1] → Q2
// original_answer[2] → Q3
// original_answer[3] → Q4
// original_answer[4] → Q5

// 2️⃣ Selecting the form
// const form = document.querySelector("form");


// 👉 Finds the <form> element in HTML
// 👉 Stores it in form variable

// So now JS knows:

// “This is the quiz form”

// 3️⃣ Listening to submit event
// form.addEventListener("submit",(event)=>{


// 👉 This line says:

// “When user clicks submit button, run this function”

// This function runs only on submit.

// 4️⃣ Stop page refresh (VERY IMPORTANT)
// event.preventDefault()


// 👉 By default, form submission reloads page
// 👉 This line stops reload

// Without this:

// score shows for 1 sec

// page refreshes

// score disappears ❌

// 5️⃣ Collecting user answers
// const data = new FormData(form)


// 👉 FormData reads the form
// 👉 Collects selected radio values

// Internally it looks like:

// q1 → "Sachin Tendulkar"
// q2 → "West Indies"
// q3 → "Sachin Tendulkar"
// q4 → "264"
// q5 → "Muttiah Muralitharan"

// 6️⃣ Convert form data to array
// const answer = Array.from(data.values())


// Break it down:

// data.values() → gives only values

// Array.from() → converts to array

// Final result:

// answer = [
//   "Sachin Tendulkar",
//   "West Indies",
//   "Sachin Tendulkar",
//   "264",
//   "Muttiah Muralitharan"
// ]


// Now this array matches original_answer order.

// 7️⃣ Score variable
// let result = 0


// 👉 Starts score from 0
// 👉 Will increase when answer is correct

// 8️⃣ Loop through answers
// for(let i=0;i<answer.length;i++){


// 👉 Loop runs 5 times (for 5 questions)

// Values of i:

// i = 0 → Q1
// i = 1 → Q2
// i = 2 → Q3
// i = 3 → Q4
// i = 4 → Q5

// 9️⃣ Compare answers
// if(answer[i]==original_answer[i]){
//     result++
// }


// 👉 Compares:

// User answer vs Correct answer


// If same:

// increase score by 1

// Example:

// answer[0] === original_answer[0] → true → result++

// 🔟 Display result
// const out=document.getElementById("out")


// 👉 Selects this HTML element:

// <div id="out"></div>

// out.textContent= `${result}/out of 5`


// 👉 Shows score on screen
// Example:

// 3/out of 5


// (You can later improve text to: Score: 3 / 5)

// 🧠 FINAL FLOW IN ONE LINE

// 👉 Submit
// 👉 Stop refresh
// 👉 Read answers
// 👉 Compare with correct answers
// 👉 Count score
// 👉 Show result