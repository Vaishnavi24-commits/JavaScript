🧠 SOCHNE KI APPROACH (pehle dimaag me)

Goal:
👉 User 2 numbers daale
👉 Button click kare
👉 Unka sum screen par aa jaye

Iske liye hume 5 cheezein karni hoti hain:

Button ko pakadna

Button click hone ka wait karna

Inputs se numbers nikalna

Addition karna

Result screen par dikhana

Ab isi ko code me tod ke samjho 👇

🧩 STEP 1: Button ko pakadna (DOM se)
const button = document.querySelector("button")


🔹 Matlab:
HTML me jo <button> hai, usko JavaScript me pakad liya

🧠 Socho:

“Mujhe pata hona chahiye ki kaunsa button click ho raha hai”

🧩 STEP 2: Button click hone ka wait karna (Event)
button.addEventListener("click", () => {


🔹 Matlab:

Jab bhi user button pe click kare → ye code chale

🧠 Real life example:
Doorbell bajti hai → tum door kholte ho
Button click hota hai → function chalta hai

🧩 STEP 3: First input se number nikalna
const input1 = document.getElementById("first")
const num1 = Number(input1.value)


🔹 getElementById("first")
👉 HTML ka pehla input pakad liya

🔹 input1.value
👉 User ne jo type kiya (⚠️ ye STRING hoti hai)

🔹 Number(...)
👉 String → Number
👉 Taki maths ho sake

🧠 Agar Number nahi lagaya hota:

"2" + "3" = "23" ❌

🧩 STEP 4: Second input ke saath same kaam
const input2 = document.getElementById("second")
const num2 = Number(input2.value)


🧠 Bilkul same logic
Sirf doosra number

🧩 STEP 5: Addition karna
const result = num1 + num2


🧠 Ab dono numbers hain
Toh real addition hoga ✅

🧩 STEP 6: Result screen par dikhana
const re = document.getElementById("result")
re.textContent = "Result:" + result


🔹 result div pakda
🔹 Uske andar text daal diya

🧠 Browser me ye dikhega:

Result: 7

🔁 PURE FLOW (ONE LINE STORY)

Button click hua → inputs liye → string ko number banaya → add kiya → result dikha diya

🚫 COMMON BEGINNER MISTAKES (tumne avoid ki 👍)

❌ Direct value + value
❌ ID mismatch
❌ Button click ke bina calculation
❌ Result div ko select na karna

🔥 AB TUM KYA SEEKH CHUKI HO

✔ DOM se element select karna
✔ Events (click)
✔ Input se data lena
✔ Type conversion
✔ Output show karna

Ye JS ki foundation hai 💪
Aage har project isi pe banega.

Next level?

❓ empty input handle karna

➖ ➗ ✖ calculator banana

💡 keyup pe live result

📦 isko reusable function banana