//const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=ce86fbf3c7b14c31bee155900252412&q=London&aqi=yes`)
// Promises.then((response)=>{
//     console.log(response.json()); //returning a promise object thats pending
// })
// the promise object respresents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//promises have three states
//1.pending
//2.fulfilled
//3.rejected
//Promises.then((response)=>{
    // const pro2 = response.json();
    // pro2.then((data)=>{
    //     console.log(data);
        
    // })
//})

fetch(`http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=London&aqi=yes`)
.then(response=>response.json())
.then(data=>console.log(data.current.temp_f))
.catch(error=>console.log(error));


