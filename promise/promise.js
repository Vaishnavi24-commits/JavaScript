const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=ce86fbf3c7b14c31bee155900252412&q=London&aqi=yes`)
Promises.then((response)=>{
    console.log(response.json());
        
 
})
// the promise object respresents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//promises have three states
//1.pending
//2.fulfilled
//3.rejected