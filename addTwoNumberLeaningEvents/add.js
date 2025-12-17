const button = document.querySelector("button")
button.addEventListener("click" , () => {
    //read the data from the input
    const input1 = document.getElementById("first")
    const num1 = Number(input1.value) // this gives the value in string format we need to convert it to number to do addition
   

    const input2 = document.getElementById("second")
    const num2 = Number(input2.value)

    //show result
    const result = num1+num2
    const re = document.getElementById("result")
    re.textContent = "Result:" +result
})