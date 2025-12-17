document.body.addEventListener('click',(event)=>{

   const circle =  document.createElement('div')
   circle.className = 'circle'
   circle.textContent = 'Hi'
   const x = event.clientX
   const y = event.clientY
   circle.style.left = `${x-25}px`
   circle.style.top = `${y-25}px`
   const color = ['red','green','blue','yellow','purple','pink','orange']
   circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)] // random color generate hoga
   document.body.appendChild(circle) // append the circle to the body and div tag console m add hote jayenge jitni bar click karoge ab isko rokne k liye 5 second ka timer lagate hain
   setTimeout(()=>{
         circle.remove()
   },5000) // deletes the circle after 5 seconds
})