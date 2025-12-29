function placeOrder(callback){
    console.log("Talking with Dominos");

    setTimeout(()=>{
        console.log("Order placed successfully");
        callback()
    },2000)
    
}

function preparingOrder(callback){
    console.log("Pizza Preparation started");
    setTimeout(()=>{
        console.log("Pizza preparation done");
        callback()
    },5000)
}

function pickupOrder(callback){
    console.log("Reaching restaurant for picking order")

    setTimeout(()=>{
        console.log("Order picked up by Delivery Boy");
        callback();
    },3000)
}

function deliverOrder(callback){
    console.log("Delivery Boy is on the way");
    setTimeout(()=>{
        console.log("Order Delivered successfully");
        
    },5000)
}
placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder()
        })
    })
})


