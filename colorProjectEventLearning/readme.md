🧠 BIG PICTURE (Approach pehle samjho)

Goal:
👉 Jab user screen par click kare,
👉 us exact jagah par ek colorful circle bane,
👉 uske andar text ho (“Hi”),
👉 circle thodi der me khud delete ho jaye.

Isko hum 4 logical steps me todte hain:

Click detect karo

Circle banao

Click ki position par rakho

Kuch time baad hata do

Ab line-by-line chalte hain 👇

🔹 STEP 1: Body par click sunna (Event Listener)
document.body.addEventListener('click', (event) => {

🤔 Yahan kya ho raha hai?

document.body → poora webpage

addEventListener('click', ...) →
jab bhi body par click ho, andar ka code chale

🔔 event kya hai?

Browser khud ek object deta hai

Isme click ki saari info hoti hai:

click kahan hua

mouse position

kaunsa button

Soch:

“User ne click kiya → browser bola: ye lo details”

🔹 STEP 2: Naya circle banana (Create element)
const circle = document.createElement('div')


➡️ JavaScript se naya <div> bana rahe ho
➡️ Abhi ye sirf memory me hai, page par nahi

circle.className = 'circle'


➡️ Is div ko CSS wali .circle class de di
➡️ Ab is div ko:

shape

animation

size
sab CSS se mil jayega

circle.textContent = 'Hi'


➡️ Circle ke andar text likh diya

🔹 STEP 3: Click ki position lena (MOST IMPORTANT)
const x = event.clientX
const y = event.clientY

🧠 Ye kya deta hai?

clientX → click ka horizontal position

clientY → click ka vertical position

Soch:

“User ne screen ke is point par click kiya”

circle.style.left = `${x - 25}px`
circle.style.top = `${y - 25}px`

❓ -25 kyun?

Circle ka size = 50 × 50

Agar direct x, y dete:
→ circle ka top-left corner click par aa jata

👉 Hume center chahiye
👉 Half of 50 = 25

So:

left = clickX − 25

top = clickY − 25

🎯 Ab circle exact click ke center par banega

🔹 STEP 4: Random color generate karna
const color = ['red','green','blue','yellow','purple','pink','orange']


➡️ Ek array bana li colors ki

circle.style.backgroundColor =
  color[Math.floor(Math.random() * color.length)]

🧠 Iska logic:

Math.random() → 0 se 1 ke beech number

* color.length → array ke size ke hisaab se

Math.floor() → decimal hata diya

color[index] → random color mil gaya 🎨

🔹 STEP 5: Page par circle dikhana
document.body.appendChild(circle)


🔥 IMPORTANT LINE

➡️ Ab tak circle sirf JS memory me tha
➡️ appendChild = page ke andar add kar diya

Ab:

DOM me <div class="circle">Hi</div> aa gaya

Har click par naya div add hota jaata hai

🔹 STEP 6: Circle ko automatically hatana
setTimeout(() => {
  circle.remove()
}, 5000)

⏱️ Ye kya karta hai?

setTimeout → “itna time baad kaam karo”

5000 → 5 seconds

So:

“5 second baad is circle ko delete kar do”

➡️ circle.remove() → DOM se element nikal gaya

🔁 FLOW EK LINE ME

Click hua

JS ne click position li

Ek naya div banaya

CSS class lagayi

Random color diya

Click ki jagah par rakha

Page me add kiya

5 sec baad hata diya

🧠 INTERVIEW / LEARNING APPROACH (IMPORTANT)

Agar koi bole:

“How did you think of this?”

Tu bolegi:

“I broke the problem into small steps:
detect click → create element → position it using event coordinates → style it using CSS → clean up using timeout.”

🔥 THIS IS EXACTLY HOW A DEVELOPER THINKS

🔹 BODY STYLE (pure page ka control)
body {
  margin: 0;
  padding: 0;


➡️ Browser by default thoda gap deta hai page ke around.
➡️ margin: 0 & padding: 0 → sab default gap hata diya.

  background-color: black;


➡️ Pura page black background ka ho gaya.

  height: 100vh;


➡️ 100vh = 100% viewport height
➡️ Matlab poori screen ki height le lega.

  display: flex;


➡️ Body ko flex container bana diya.
➡️ Ab hum easily cheezon ko center kar sakte hain.

  justify-content: center;


➡️ Horizontally center (left-right se beech).

  align-items: center;


➡️ Vertically center (upar-neeche se beech).

  overflow: hidden;
}


➡️ Agar koi element screen se bahar jaye → dikhega nahi.
➡️ Animation ke time circle bahar nikal sakta hai, isliye use kiya.

🔹 .circle CLASS (circle ka design)
.circle {
  position: absolute;


➡️ Circle page ke upar freely move kar sakta hai
➡️ Flex ke rules se bound nahi hota.

  width: 50px;
  height: 50px;


➡️ Circle ka initial size = 50 × 50 px

  border-radius: 50%;


➡️ Square → perfect circle ban gaya.

  display: flex;
  justify-content: center;
  align-items: center;


➡️ Circle ke andar ka text center me aa jata hai.

  color: white;


➡️ Text ka color white.

  font-family: Arial, sans-serif;


➡️ Text ka font set kiya.

  font-size: 16px;
  text-align: center;


➡️ Text readable aur center aligned.

  opacity: 1;


➡️ Fully visible (1 = full, 0 = invisible).

  overflow: hidden;


➡️ Agar text bada ho jaye → circle ke bahar na dikhe.

  animation: grow 5s forwards;


💥 YAHI MAIN MAGIC HAI

➡️ grow → animation ka naam
➡️ 5s → 5 seconds chalegi
➡️ forwards → animation ke last state pe ruk jaayegi

  background-color: blue;
}


➡️ Circle ka color blue.

🔹 @keyframes grow (animation ka flow)
@keyframes grow {


➡️ Animation define kar rahe hain jiska naam grow hai.

🔸 START (0%)
  0% {
    transform: scale(1);


➡️ Starting size = normal size

    opacity: 1;


➡️ Fully visible.

    font-size: 10px; 
  }


➡️ Text chhota se start hota hai.

🔸 END (100%)
  100% {
    transform: scale(3);


➡️ Circle 3 times bada ho jaata hai 😮

    opacity: 0;


➡️ Dheere-dheere gayab ho jata hai.

    font-size: 40px; 
  }
}


➡️ Text bhi bada ho jata hai while growing.

🧠 SUMMARY (short & clear)

✔ Black full screen
✔ Center me blue circle
✔ Circle grow hota hai
✔ Text bhi grow hota hai
✔ Circle fade out ho jata hai
✔ 5 seconds me animation complete

Agar tu bole toh next step me:

JS se multiple circles generate karna

Random colors

Mouse click par circle banana

sab sikha dungi 💙

