const quotes = [
  "Honesty is the best policy",
  "Consistency beats talent",
  "Discipline creates freedom",
  "Small steps every day matter",
  "Dream big, start small",
  "Focus on progress, not perfection",
  "Hard work never goes unnoticed",
  "Your future depends on what you do today",
  "Learn, unlearn, and relearn",
  "Believe in yourself even when no one does",
  "Stay patient and trust the process",
  "Success is built, not gifted",
  "Growth begins outside your comfort zone",
  "Do it scared, but do it",
  "Effort today, results tomorrow",
  "You are capable of more than you think",
  "Consistency turns goals into reality",
  "Silence and focus are superpowers",
  "One day or day one — you decide",
  "Keep learning, keep growing"
];







function generateQuote(){
const text = document.getElementById("quote")
const index = Math.floor(Math.random()*quotes.length)
text.textContent = quotes[index]
}

setInterval(generateQuote,2000)


// change bg color randomly after 2 seconds
//Method 1
// const body = document.getElementById("body")
// function bgColor(){
//     const red = Math.floor(Math.random()*256)
//     const green = Math.floor(Math.random()*256)
//     const blue = Math.floor(Math.random()*256)

//     body.style.backgroundColor = `rgb(${red},${green},${blue})`
// }
// setInterval(bgColor,2000)

//Method 2
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; //document.body IT IS THE SHORTCUT TO SELECT THE WHOLE PAGE to change the background color of the entire page
}

setInterval(randomColor, 2000);
