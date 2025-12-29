const cart = ["Margherita", "Garlic Bread"];

function placeOrder(cart){
    console.log("Talking with Domino's");

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const food_available = true;

            if(food_available){
                console.log("Order Placed Successfully");
                resolve({
                    orderId: 221,
                    food: cart,
                    restaurant: "Dominos",
                    location: "Dwarka"
                });
            } else {
                reject("Items Out of Stock");
            }
        }, 2000);
    });
}

function preparingOrder(order){
    console.log("Pizza preparation started....");

    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log("Pizza preparation Done");
            resolve({
                token: 12,
                restaurant: order.restaurant,
                location: order.location
            });
        }, 5000);
    });
}

function pickupOrder(foodDetails){
    console.log("Reaching restaurant for picking order");

    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log("Order picked up by Delivery Boy");
            resolve(foodDetails.location);
        }, 3000);
    });
}

function deliverOrder(droplocation){
    console.log("Delivery boy on the way");

    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log("Order Delivered successfully at", droplocation);
            resolve("Delivered");
        }, 5000);
    });
}

placeOrder(cart)
.then(order => preparingOrder(order))
.then(foodDetails => pickupOrder(foodDetails))
.then(location => deliverOrder(location))
.then(status => console.log("Final Status:", status))
.catch(error => console.log("Error:", error));

