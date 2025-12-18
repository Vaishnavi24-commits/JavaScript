// const pink = document.getElementById("pink")
// const purple = document.getElementById("purple")
// const green = document.getElementById("green")
// const blue = document.getElementById("blue")
// const yellow = document.getElementById("yellow")



// const body = document.body

// pink.addEventListener("click",()=>{
//     body.style.backgroundColor = "pink"
// })

// purple.addEventListener("click",()=>{
//     body.style.backgroundColor = "purple"
// })

// green.addEventListener("click",()=>{
//     body.style.backgroundColor = "green"
// })

// blue.addEventListener("click",()=>{
//     body.style.backgroundColor = "blue"
// })

// yellow.addEventListener("click",()=>{
//     body.style.backgroundColor = "yellow"
// })

// const buttons = document.querySelectorAll("button")
// const body = document.body

// buttons.forEach((button) =>{
//     button.addEventListener("click",()=>{
//         body.style.backgroundColor = button.id
//     })
 // if there will be 100 colours so it will create event listener for 100 projects this
//  makes our project run very slow to
//  improve this we use event bubbling and event capturing concept



//Event delegation is used
const root = document.getElementById("root")
root.addEventListener("click",(event)=>{
   if(event.target.tagName==="BUTTON") // this is used to make sure that only button clicks are handled it id root also have other elements
    document.body.style.backgroundColor=event.target.id
})
