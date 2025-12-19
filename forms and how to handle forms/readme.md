<!-- Event type -->
1: input
2: change
3: focus
<!-- focus: Does not bubble, so it needs to be directly attached to individual input elements.
focusin: Bubbles, so it can be attached to the form element for event delegation. -->
4: blur or focusout
5: click
<!-- 6: dbclick Explain later -->
7: submit
8: reset
9: FormData 

🔹 First line (MOST IMPORTANT)
const form = document.querySelector("form")


👉 This selects the form element from HTML
Everything that happens inside the form will bubble up to this form.

🧠 Core Concept you MUST know first
event.target

➡️ The exact element that triggered the event
(not the form, but the input / button inside it)

Example:

You type in First Name input

event.target = <input id="first">

1️⃣ input event
form.addEventListener("input",(event)=>{
    console.log(event.target.value); 
})

🔥 When it runs:

Every single change in input

Typing one letter

Deleting

Pasting text

📌 Example:

Typing Vaishnavi
Console output:

V
Va
Vai
Vaish
Vaishnavi

✅ Use when:

Live validation

Character counter

Instant preview

2️⃣ change event
form.addEventListener("change",(event)=>{
    console.log(event.target.value);
})

🔥 When it runs:

ONLY when input loses focus

After value is changed AND you click outside

📌 Example:

Type full name

Click somewhere else

Then console prints value

❗ Difference from input
input	change
Every keystroke	Only once
Real-time	After focus lost
3️⃣ focusin event
form.addEventListener("focusin",(event)=>{
    console.log(event.target.value);
})

🔥 When it runs:

When user clicks inside an input

Input gains focus

📌 Example:

Click inside Age field

Event fires

✅ Use when:

Highlight input

Show hint message

Show error message only on focus

4️⃣ focusout event
form.addEventListener("focusout",(event)=>{
    console.log(event.target.value);
})

🔥 When it runs:

When input loses focus

User clicks outside

🧠 Usually paired with:

focusin + focusout

✅ Use when:

Validate field after user finishes typing

Hide hint message

5️⃣ click event
form.addEventListener("click",(event)=>{
    console.log(event.target.value);
})

🔥 When it runs:

Clicking anything inside the form

Input, button, label

⚠️ Problem:

Clicking label or div → value may be undefined

❌ Not best for forms

Better to use:

input

submit

6️⃣ submit event 🚨 IMPORTANT
form.addEventListener("submit",(event)=>{
    console.log(event.target.value);
})

🔥 When it runs:

Clicking Submit

Pressing Enter inside input

❌ BIG ISSUE:

Form reloads page by default

✅ Correct way:
form.addEventListener("submit",(event)=>{
    event.preventDefault(); // STOP page reload

    console.log("Form submitted");
})

🧠 event.target here:

Target = <form>

Form has no value

So event.target.value ❌ useless

✅ Correct approach:
document.getElementById("first").value

7️⃣ reset event
form.addEventListener("reset",(event)=>{
    console.log(event.target.value);
})

🔥 When it runs:

Clicking Reset button

🧠 event.target

Target = form

Form has no value

✅ Use when:

Clear custom messages

Clear result div

Example:

form.addEventListener("reset",()=>{
    document.getElementById("result").textContent = "";
})

🔑 SUMMARY TABLE (SAVE THIS)
Event	Fires when	Best use
input	Every keystroke	Live validation
change	On focus loss	Final value check
focusin	Field selected	Show hints
focusout	Field unselected	Validate
click	Any click	Buttons
submit	Submit pressed	Form handling
reset	Reset pressed	Clear UI
🧠 IMPORTANT RULE YOU JUST LEARNED (BIG)

Forms do NOT have values — inputs do

❌ event.target.value on form
✅ event.target on input
✅ document.getElementById("id").value
/********************************************************************************************************************/
🧩 What this code is doing (BIG PICTURE)

👉 User fills form → clicks Submit → JS reads inputs → shows data in result div
👉 Page does NOT reload

That’s the goal.

🔹 Code (for reference)
form.addEventListener("submit",(event)=>{

    event.preventDefault();

    const first = document.getElementById("first")
    console.log(first.value);
    
    const second = document.getElementById("second")
    console.log(second.value);

    const third = document.getElementById("third")
    console.log(third.value);

    const result = document.getElementById("result")
    result.innerText = `${first.value} ${second.value} ${third.value}`
})

🧠 Step-by-Step Explanation
1️⃣ form.addEventListener("submit", ...)
form.addEventListener("submit",(event)=>{


👉 Listens for Submit button click
👉 OR when user presses Enter

2️⃣ event.preventDefault() 🚨 MOST IMPORTANT
event.preventDefault();

🧠 Default browser behavior:

Reload page

Clear console

Remove output

❌ Without this:

You will see output for 0.1 second

Page reloads

Everything disappears

✅ With this:

JS takes control

Form behaves like an app

📌 Rule:

Always use preventDefault() when handling forms with JS

3️⃣ Get First Name input
const first = document.getElementById("first")


👉 This selects:

<input id="first">

Then:
console.log(first.value);


👉 .value = what user typed

Example:

Vaishnavi

4️⃣ Get Last Name input
const second = document.getElementById("second")
console.log(second.value);


Same logic:

Select input

Read user value

5️⃣ Get Age input
const third = document.getElementById("third")
console.log(third.value);


⚠️ Note:

Even type="number" returns string

"20" not 20

(To convert later → Number(third.value))

6️⃣ Select result div
const result = document.getElementById("result")


👉 This selects:

<div id="result"></div>


This is where output will be shown.

7️⃣ Show result on page 🔥
result.innerText = `${first.value} ${second.value} ${third.value}`

🧠 What’s happening:

Template literal ` `

Values inserted dynamically

Example output:
Vaishnavi Shrivastava 19

🔑 CORE CONCEPTS YOU JUST USED
Concept	Meaning
submit event	Captures form submit
preventDefault	Stops reload
getElementById	Access input
.value	Read user input
innerText	Show output

👉 This is real frontend logic, not toy JS.

⚠️ COMMON BEGINNER MISTAKES (you avoided)

❌ Using event.target.value on form
❌ Forgetting preventDefault()
❌ Using innerHTML unnecessarily

👏 You did it right.

🚀 BETTER VERSION (Best Practice)

Just small improvements:

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const first = document.getElementById("first").value.trim();
    const second = document.getElementById("second").value.trim();
    const third = document.getElementById("third").value.trim();

    const result = document.getElementById("result");

    result.innerText = `Name: ${first} ${second}, Age: ${third}`;
})

🧠 THINK LIKE A DEVELOPER (IMPORTANT)

Ask yourself:
1️⃣ What event starts the action? → submit
2️⃣ What default behavior should stop? → reload
3️⃣ Where is user data? → inputs
4️⃣ Where to show output? → result div

You followed this flow correctly ✅

/*************************************************************************************************************/

