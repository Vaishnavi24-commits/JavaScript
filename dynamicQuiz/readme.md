Perfect 👍
Ab jo tumne code bheja hai wo fully correct & working hai.
Main isko bilkul beginner mindset se, line-by-line + approach ke sath explain kar rahi hoon — jaise tum khud exam / interview / project me explain kar sako 💙

🔹 1. questionBank – Data source
const questionBank = [
  { question: "...", options: [...], answer: "..." },
  ...
]

🔹 Iska role:

Ye database hai tumhare quiz ka

Har object = 1 question

Uske andar:

question → question text

options → 4 choices

answer → correct option

👉 Ab quiz ke questions hardcode nahi, dynamically aayenge

🔹 2. RandomQuestion() – 5 random unique questions
function RandomQuestion() {
  const data = new Set();

❓ Why Set?

Set duplicate values allow nahi karta

Matlab ek question repeat nahi hoga

while (data.size !== 5) {

🔹 Meaning:

Jab tak Set me 5 questions nahi aa jaate, loop chalta rahe

const index = Math.floor(Math.random() * questionBank.length);

🔹 Ye kya kar raha?

Math.random() → 0 se 0.99

* questionBank.length → valid index range

Math.floor() → decimal hata deta

👉 Result: random index

data.add(questionBank[index]);


Random index ka question Set me add

Agar duplicate hua → Set ignore karega

return [...data];

🔹 Why spread ...?

Set ko Array me convert kar diya

Taaki forEach, indexing use kar sake

🔹 3. Form select + setup
const form = document.querySelector("form");


HTML ka <form> select kiya

const problem = RandomQuestion();


Ab problem me 5 random questions ka array hai

const original_answers = {};

🔹 Iska kaam:

Ye answer key hai

Format:

{
  q1: "Sachin Tendulkar",
  q2: "India",
  ...
}

🔹 4. Questions ko DOM me show karna
problem.forEach((obj, index) => {


Loop chala 5 questions pe

obj → current question object

index → question number (0–4)

const div_element = document.createElement("div");
div_element.className = "question";


Har question ke liye ek container div

original_answers[`q${index + 1}`] = obj.answer;

🔹 Important logic

Question ka correct answer store

Example:

q1 → "Sachin Tendulkar"

const para = document.createElement("p");
para.textContent = `${index + 1}. ${obj.question}`;


Question text show ho raha

index+1 → numbering (1,2,3...)

🔹 5. Options (radio buttons)
obj.options.forEach((option) => {


Har question ke 4 options

const input = document.createElement("input");
input.type = "radio";
input.name = `q${index + 1}`;
input.value = option;

🔹 Very important:

Same name → sirf 1 option select hoga

value → jo user select karega

label.appendChild(input);
label.appendChild(document.createTextNode(option));


Radio + text ek label me

div_element.appendChild(label);


Option ko question ke div me add

form.appendChild(div_element);


Question form me dikh jaata hai

🔹 6. Submit button
const button = document.createElement("button");
button.type = "submit";
button.textContent = "Submit";
form.appendChild(button);


Dynamically submit button bana diya

🔹 7. Form submit logic (MOST IMPORTANT)
form.addEventListener("submit", (event) => {
  event.preventDefault();

🔹 preventDefault():

Page reload hone se rokti hai

const data = new FormData(form);

🔹 FormData kya karta?

Saare selected radio values nikaal leta

Format:

q1 → "Sachin Tendulkar"
q2 → "India"

let result = 0;


Score counter

for (let [key, value] of data.entries()) {


Har answered question par loop

if (value === original_answers[key]) {
  result++;
}

🔹 Logic:

User ka answer === correct answer

Match hua → score +1

document.getElementById("out").textContent = `${result} / 5`;


Final score display

🔥 Tumne kya-kya SEEKH liya?

✅ Random logic
✅ Set vs Array

🔹 Function ka goal (pehle samjho)
function RandomQuestion()


👉 Goal:
questionBank se 5 random questions select karna
❗ Repeat bina (no duplicates)

🔹 Line-by-Line Explanation
1️⃣ Empty array banayi
const arr = [];


Isme hum final 5 random questions store karenge

2️⃣ Loop control variables
let i = 0;
let length = questionBank.length;


i → kitne questions select ho chuke

length → array ka current usable size

👉 Ye bahut important hai (duplicate avoid karne ke liye)

3️⃣ While loop
while(i < 5)


Jab tak 5 questions select nahi ho jaate

Loop chalega

4️⃣ Random index generate
const index = Math.floor(Math.random() * length);


❓ Why length not questionBank.length?

👉 Kyunki har step ke baad:

Ek question lock ho jata

Usko dobara pick nahi karna

So hum random range ko shrink kar rahe hain

5️⃣ Question push kar diya
arr.push(questionBank[index]);


Random question ko result array me daal diya

6️⃣ ⭐ MOST IMPORTANT LINE (swap)
[questionBank[index], questionBank[length - 1]] =
[questionBank[length - 1], questionBank[index]];

🧠 Ye kya kar raha?

Selected question ko array ke end me swap kar deta hai

Example:
Before:
[Q1, Q2, Q3, Q4, Q5]

Select Q2 (index=1)

After swap:
[Q1, Q5, Q3, Q4, Q2]


👉 Ab Q2 end me chala gaya
👉 Aur next random selection me use nahi hoga

7️⃣ Length aur counter update
length--;
i++;


length-- → usable range kam

i++ → ek question select ho gaya

8️⃣ Return final array
return arr;


5 random unique questions mil gaye 🎉

🔥 Ye technique kya kehlati hai?

👉 Partial Fisher–Yates Shuffle

Efficient

No extra memory like Set

Time complexity: O(n)

🆚 Is vs Set method (short comparison)
Method	Duplicate	Performance	Original array
Set	❌ No	Medium	Safe
Swap	❌ No	🔥 Fast	❗ Modifies array

⚠️ Important Warning
Ye function questionBank ko modify karta hai
Agar dubara call kiya → order change hoga

🧠 Interview-level summary (yaad rakhna)

"This function selects 5 random unique questions using a shrinking range and swap technique. Each selected element is moved to the end of the array to prevent reselection, making it efficient and duplicate-free."