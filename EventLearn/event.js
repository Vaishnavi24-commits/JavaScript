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


//Mouse event

const button = document.querySelector("button")
button.addEventListener("click",(event)=>{
    console.log(event.target);// to see the event target here it is button
    console.log(event.type);// to see the event type here it is click
    console.log(event.clientX);// to see the x coordinate of mouse when clicked veiw put se left margin
    console.log(event.clientY);// to see the y coordinate of mouse when clicked veiw put se top margin
    
    
    

  const text = document.getElementById("quote")
  const index = Math.floor(Math.random()*quotes.length)
  text.textContent = quotes[index] // When the button is clicked, a new quote will be displayed

})

//Keyboard event
// document.addEventListener("keydown",()=>{
//   const text = document.getElementById("quote")
//   const index = Math.floor(Math.random()*quotes.length)
//   text.textContent = quotes[index]}) // When any key is pressed, a new quote will be displayed

//keyup event
// document.addEventListener("keyup",()=>{
//   const text = document.getElementById("quote")
//   const index = Math.floor(Math.random()*quotes.length)
//   text.textContent = quotes[index]}) // When any key is released, a new quote will be displayed

//event object
//when we want to change the quote only when specific key is pressed

//event is an object that is automatically passed to the event handler function and contains information about the event that occurred it has almost all the properties and methods related to that event.

   // console.log(event);// to see the event object
   // console.log(event.key) // to see which key is pressed;
   
   
// document.addEventListener("keydown",(event)=>{
    
   
//    if(event.key==="Enter")// to check if the enter key is pressed
//    {
    
//    const text = document.getElementById("quote")
//    const index = Math.floor(Math.random()*quotes.length)
//    text.textContent = quotes[index]
// }}) // When the Enter key is pressed, a new quote will be displayed
